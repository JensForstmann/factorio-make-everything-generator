import { TextField } from '@material-ui/core';
import React, { useState } from 'react';
import Dropzone from 'react-dropzone'
import MUIDataTable from "mui-datatables";

import './App.css';

import Pako from 'pako';


type Recipe = {
    name: string
    enabled: boolean
    hidden: boolean
    unlock_results: boolean
    category: string
    order: string
    energy: number
    group_name: string
    group_order: string
    subgroup_name: string
    subgroup_order: string
    request_paste_multiplier: number
    main_product: string
    main_product_stack_size: number
    item_ingredients: string[];
};

// type Categories = {
//     [key: string]: {}
// }

// type Group = {
//     order: string;
//     subgroups: {
//         name: string;
//         order: string;
//     }[]
// }
// type Groups = {
//     [key: string]: Group
// }


function parse(input: string) {
    const recipesInput = input.split("-----");

    const recipes: Recipe[] = [];
    for (let i = 0; i < recipesInput.length; i++) {
        const recipeInput = recipesInput[i].trim();
        const lines = recipeInput.split("\n");
        const recipe = {
            item_ingredients: []
        } as any;

        let isValid = false;
        for (let l = 0; l < lines.length; l++) {
            const line = lines[l].trim();
            if (line) {
                isValid = true;
                const parts = line.split(":");
                const key = parts.shift();
                const value = parts.join(":").trim();
                if (key === "item_ingredient_name") {
                    recipe.item_ingredients.push(value);
                } else {
                    recipe[key as any] = value;
                }
            }
        }

        if (isValid) {
            recipes.push(recipe);
        }
    }
    recipes.sort((a, b) => {
        if (a.group_name === b.group_name) {
            if (a.subgroup_name === b.subgroup_name) {
                return a.order > b.order ? 1 : -1;
            }
            return a.subgroup_order > b.subgroup_order ? 1 : -1;
        }
        return a.group_order > b.group_order ? 1 : -1;
    });

    // const categories: Categories = {};
    // recipes.forEach((recipe) => {
    //     if (!categories[recipe.category]) {
    //         categories[recipe.category] = {};
    //     }
    // });

    // const groups: Groups = {};
    // recipes.forEach((recipe) => {
    //     if (!groups[recipe.group_name]) {
    //         groups[recipe.group_name] = {
    //             order: recipe.group_order,
    //             subgroups: []
    //         };
    //     }

    //     if (groups[recipe.group_name].subgroups.filter((sg) => sg.name === recipe.subgroup_name).length === 0) {
    //         groups[recipe.group_name].subgroups.push({
    //             name: recipe.subgroup_name,
    //             order: recipe.subgroup_order
    //         });
    //     }
    // });

    return {
        recipes,
        // categories,
        // groups
    };
}

function generateOutput(filteredRecipes: Recipe[]) {

    const machineName = 'assembling-machine-3';
    const machineWidth = 3;
    const machineHeight = 3;
    const machineSpeed = 1.25;
    const rowLength = 4;
    const machineSpace = 0;
    const rowSpace = 0;
    const sourceChestName = 'logistic-chest-requester';
    const requestFromBuffers = true;
    const sourceChestWidth = 1;
    const sourceChestHeight = 1;
    const targetChestName = 'logistic-chest-buffer';
    const targetChestSetRequest = true;
    const targetChestWidth = 1;
    const targetChestHeight = 1;
    const inserterName = 'stack-inserter';
    const outserterName = 'stack-inserter';

    const bpObject = {
        "blueprint": {
            "icons": [
                {
                    "signal": {
                        "type": "item",
                        "name": "constant-combinator"
                    },
                    "index": 1
                }
            ],
            "entities": [],
            "item": "blueprint",
            "version": 68722819072
        }
    };

    const entities: any[] = bpObject.blueprint.entities;

    for (let i = 0; i < filteredRecipes.length; i++) {
        const recipe = filteredRecipes[i];

        const row = Math.floor(i / rowLength);
        const machineInRow = i % rowLength;

        const x = machineInRow * (machineSpace + Math.max(machineWidth, sourceChestWidth + targetChestWidth));
        const y = row * (machineHeight + rowSpace + Math.max(sourceChestHeight + targetChestHeight));

        const machine = {
            "entity_number": 5 * i + 1,
            "name": machineName,
            "position": {
                "x": x + machineWidth / 2,
                "y": y + machineHeight / 2
            },
            "recipe": recipe.name
        };

        const inserter = {
            "entity_number": 5 * i + 2,
            "name": inserterName,
            "position": {
                "x": x + 0.5,
                "y": y + machineHeight + 0.5
            },
            "direction": 4
        };

        const outserter = {
            "entity_number": 5 * i + 3,
            "name": outserterName,
            "position": {
                "x": x + 0.5 + sourceChestWidth,
                "y": y + machineHeight + 0.5
            },
            "control_behavior": {
                "logistic_condition": {
                    "first_signal": {
                        "type": "item",
                        "name": recipe.main_product
                    },
                    "constant": recipe.main_product_stack_size,
                    "comparator": "<"
                },
                "connect_to_logistic_network": true
            }
        };

        const sourceChest = {
            "entity_number": 5 * i + 4,
            "name": sourceChestName,
            "position": {
                "x": x + sourceChestWidth / 2,
                "y": y + machineHeight + 1 + sourceChestHeight / 2
            },
            "request_filters": recipe.item_ingredients.map((ing, i) => {
                const count = parseInt(ing.split(" ")[0]);
                const name = ing.split(" ")[1];
                return {
                    "index": i + 1,
                    "name": name,
                    "count": recipe.request_paste_multiplier === 1 ? count : Math.floor(count * recipe.request_paste_multiplier * machineSpeed / recipe.energy)
                };
            }),
            "request_from_buffers": requestFromBuffers
        };

        const targetChest = {
            "entity_number": 5 * i + 5,
            "name": targetChestName,
            "position": {
                "x": x + sourceChestWidth + targetChestWidth / 2,
                "y": y + machineHeight + 1 + targetChestHeight / 2
            }
        };

        if (targetChestSetRequest) {
            (targetChest as any).request_filters = [
                {
                    "index": 1,
                    "name": recipe.main_product,
                    "count": recipe.main_product_stack_size * 10
                }
            ];
        }

        entities.push(machine);
        entities.push(inserter);
        entities.push(outserter);
        entities.push(sourceChest);
        entities.push(targetChest);
    }
    return {
        bpObject: bpObject,
        bpString: "0" + Buffer.from(Pako.deflate(
            new TextEncoder().encode(
                JSON.stringify(bpObject)
            ),
            { level: 9 }
        )).toString('base64')
    };
}

function App() {
    async function onNewFile(files: File[]) {
        if (files.length === 1) {
            onNewInput(await files[0].text());
        }
    }

    function onNewInput(input: string) {
        // const { categories, groups, recipes } = parse(input);
        const { recipes } = parse(input);
        setInput(input);
        // setCategories(categories);
        // setGroups(groups);
        setRecipes(recipes);
        setFilteredRecipes([]);
    }

    function updateFilteredRecipes(selectedRecipes: number[]) {
        setFilteredRecipes(recipes.filter((recipe, index) => selectedRecipes.includes(index)));
    }

    const [input, setInput] = useState('');
    // const [categories, setCategories] = useState<Categories>({});
    // const [groups, setGroups] = useState<Groups>({});
    const [recipes, setRecipes] = useState<Recipe[]>([]);
    const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>([]);

    const tableColumns = [
        {
            name: "name",
            options: {
                filter: false,
                sortThirdClickReset: true
            }
        }, {
            name: "category",
            options: {
                sortThirdClickReset: true
            }
        }, {
            name: "group_name",
            options: {
                sortThirdClickReset: true
            }
        }, {
            name: "subgroup_name",
            options: {
                sortThirdClickReset: true
            }
        }
    ];

    const { bpObject, bpString } = generateOutput(filteredRecipes);

    return (
        <div>
            <div className="content">
                <Dropzone
                    onDrop={files => onNewFile(files)}
                    multiple={false}
                    accept='text/plain'
                >
                    {({ getRootProps, getInputProps }) => (
                        <section>
                            <div {...getRootProps()}>
                                <input {...getInputProps()} />
                                <p>drag & drop recipes_dump.txt file here or click to select file</p>
                            </div>
                        </section>
                    )}
                </Dropzone>

                ... or ...

                <TextField
                    label="String Input"
                    placeholder="paste content of recipes_dump.txt here"
                    multiline
                    variant="filled"
                    value={input}
                    onChange={(e) => (onNewInput(e.currentTarget.value))}
                    rowsMax={10}
                />

                <MUIDataTable
                    title={"Recipes"}
                    data={recipes}
                    columns={tableColumns}
                    options={{
                        filterType: 'multiselect',
                        download: false,
                        print: false,
                        viewColumns: false,
                        selectToolbarPlacement: 'none',
                        onRowSelectionChange: (currentRowsSelected, allRowsSelected, rowsSelected) => updateFilteredRecipes(rowsSelected as number[]),
                    }}
                />

                <div>
                    <p>... settings here ...</p>
                </div>

                <div>
                    <TextField
                        label="BP Object"
                        multiline
                        variant="filled"
                        value={filteredRecipes.length > 0 ? JSON.stringify(bpObject, null, 2) : ''}
                        rowsMax={10}
                    />
                    <TextField
                        label="BP String"
                        multiline
                        variant="filled"
                        value={filteredRecipes.length > 0 ? bpString : ''}
                        rowsMax={10}
                    />
                </div>
            </div>
        </div>
    );
}

export default App;