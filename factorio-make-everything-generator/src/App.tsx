import { TextField, TextFieldProps } from '@material-ui/core';
import React, { useRef, useState } from 'react';
import Dropzone from 'react-dropzone'
import MUIDataTable from "mui-datatables";
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import copy from 'copy-to-clipboard';

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
            parseIt(await files[0].text());
        }
    }

    function parseIt(_input: string) {
        const { recipes } = parse(_input);
        setRecipes(recipes);
        setFilteredRecipes([]);
        setExpandedAccordion('RECIPES');
    }

    function updateFilteredRecipes(selectedRecipes: number[]) {
        setFilteredRecipes(recipes.filter((recipe, index) => selectedRecipes.includes(index)));
    }

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

    const [inputDialogOpen, setInputDialogOpen] = React.useState(false);

    const handleClickOpen = () => {
        setInputDialogOpen(true);
    };

    const handleClose = () => {
        setInputDialogOpen(false);
        parseIt(inputRef.current?.value as string || "");
    };

    const [expandedAccordion, setExpandedAccordion] = React.useState<string | false>("CHEAT COMMAND");
    const changeAccordion = (panel: string) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
        setExpandedAccordion(isExpanded ? panel : false);
    };

    const inputRef = useRef<TextFieldProps>();

    const [debugInfo, setDebugInfo] = useState<any>({});

    return (
        <>
            <Accordion expanded={expandedAccordion === 'CHEAT COMMAND'} onChange={changeAccordion('CHEAT COMMAND')}>
                <AccordionSummary>CHEAT COMMAND</AccordionSummary>
                <AccordionDetails style={{ display: "block" }}>
                    <Typography>
                        Execute this cheat command and find a "recipes_dump.txt" afterwards in your script-output folder of Factorio:
                    </Typography>
                    <Typography>
                        ... command will go here...
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expandedAccordion === 'INPUT'} onChange={changeAccordion('INPUT')}>
                <AccordionSummary>INPUT</AccordionSummary>
                <AccordionDetails style={{ display: "block" }}>
                    <div>
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
                    </div>
                    <div>
                        <Button variant="contained" color="primary" onClick={handleClickOpen}>
                            Paste content
                        </Button>
                        <Dialog
                            open={inputDialogOpen}
                            onClose={handleClose}
                        >
                            <DialogTitle>Paste Content</DialogTitle>
                            <DialogContent>
                                <DialogContentText>
                                    Paste content of recipes_dump.txt and press continue.
                                </DialogContentText>
                                <TextField
                                    placeholder="paste content of recipes_dump.txt here"
                                    multiline
                                    variant="filled"
                                    inputRef={inputRef}
                                    rowsMax={10}
                                />
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleClose} color="primary">
                                    Continue
                                </Button>
                            </DialogActions>
                        </Dialog>
                    </div>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expandedAccordion === 'RECIPES'} onChange={changeAccordion('RECIPES')}>
                <AccordionSummary>RECIPES</AccordionSummary>
                <AccordionDetails style={{ display: "block" }}>
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
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expandedAccordion === 'SETTINGS'} onChange={changeAccordion('SETTINGS')}>
                <AccordionSummary>SETTINGS</AccordionSummary>
                <AccordionDetails style={{ display: "block" }}>
                    <Typography>settings here</Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expandedAccordion === 'GENERATE'} onChange={changeAccordion('GENERATE')}>
                <AccordionSummary>GENERATE</AccordionSummary>
                <AccordionDetails style={{ display: "block" }}>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => {
                            const { bpObject, bpString } = generateOutput(filteredRecipes);
                            copy(bpString);
                            setDebugInfo({ bpObject, bpString });
                        }}
                    >
                        <FileCopyIcon /> Copy Blueprint
                    </Button>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expandedAccordion === 'DEBUG AREA'} onChange={changeAccordion('DEBUG AREA')}>
                <AccordionSummary>DEBUG AREA</AccordionSummary>
                <AccordionDetails style={{ display: "block" }}>
                    <div>
                        <TextField
                            label="BP Object"
                            multiline
                            variant="filled"
                            value={JSON.stringify(debugInfo.bpObject, null, 2)}
                            rowsMax={10}
                        />
                    </div>
                    <div>
                        <TextField
                            label="BP String"
                            multiline
                            variant="filled"
                            value={debugInfo.bpString}
                            rowsMax={10}
                        />
                    </div>
                </AccordionDetails>
            </Accordion>
        </>
    );
}

export default App;