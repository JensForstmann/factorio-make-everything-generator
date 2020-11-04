import { Checkbox, FormControlLabel, TextField, TextFieldProps } from '@material-ui/core';
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
import VerticalAlignBottomIcon from '@material-ui/icons/VerticalAlignBottom';

import VanillaRecipes from './VanillaRecipes';

import './App.css';

import Pako from 'pako';

const command = `/c local recipes = ""
for _, recipe in pairs(game.player.force.recipes) do
    local recipe_prototype = recipe.prototype
    local recipe = "-----\\n"
        .. "name: " .. recipe_prototype.name .. "\\n"
        .. "enabled: " .. tostring(recipe.enabled) .. "\\n"
        .. "hidden: " .. tostring(recipe.hidden) .. "\\n"
        .. "unlock_results: " .. tostring(recipe_prototype.unlock_results) .. "\\n"
        .. "category: " .. recipe_prototype.category .. "\\n"
        .. "order: " .. recipe_prototype.order .. "\\n"
        .. "energy: " .. recipe_prototype.energy .. "\\n"
        .. "group_name: " .. recipe_prototype.group.name .. "\\n"
        .. "group_order: " .. recipe_prototype.group.order .. "\\n"
        .. "subgroup_name: " .. recipe_prototype.subgroup.name .. "\\n"
        .. "subgroup_order: " .. recipe_prototype.subgroup.order .. "\\n"
        .. "request_paste_multiplier: " .. recipe_prototype.request_paste_multiplier .. "\\n"
    if recipe_prototype.main_product then
        recipe = recipe
            .. "main_product: " .. recipe_prototype.main_product.name .. "\\n"
        if game.item_prototypes[recipe_prototype.main_product.name] then
            recipe = recipe
                .. "main_product_stack_size: " .. game.item_prototypes[recipe_prototype.main_product.name].stack_size .. "\\n"
        end
    end
        
    for _, ing in pairs(recipe_prototype.ingredients) do
        if game.item_prototypes[ing.name] then
            recipe = recipe .. "item_ingredient_name: " .. ing.amount .. " " .. ing.name .. "\\n"
        end
    end
    recipes = recipes .. "\\n" .. recipe
end
game.write_file("recipes_dump.txt", recipes)`;

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

type Settings = {
    machineName: string;
    machineWidth: number;
    machineHeight: number;
    machineSpeed: number;
    rowLength: number;
    machineSpace: number;
    rowSpace: number;
    sourceChestName: string;
    requestFromBuffers: boolean;
    sourceChestWidth: number;
    sourceChestHeight: number;
    targetChestName: string;
    targetChestSetRequest: boolean;
    targetChestWidth: number;
    targetChestHeight: number;
    inserterName: string;
    outserterName: string;
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

    return {
        recipes,
    };
}

function generateOutput(filteredRecipes: Recipe[], settings: Settings) {
    const {
        machineName,
        machineWidth,
        machineHeight,
        machineSpeed,
        rowLength,
        machineSpace,
        rowSpace,
        sourceChestName,
        requestFromBuffers,
        sourceChestWidth,
        sourceChestHeight,
        targetChestName,
        targetChestSetRequest,
        targetChestWidth,
        targetChestHeight,
        inserterName,
        outserterName
    } = settings;

    const bpObject = {
        "blueprint": {
            "description": "This blueprint was generated by this site:\nhttps://jensforstmann.github.io/factorio-make-everything-generator/\n\nReport bugs & issues or make suggestions at:\nhttps://github.com/JensForstmann/factorio-make-everything-generator",
            "icons": [
                {
                    "signal": {
                        "type": "virtual",
                        "name": "signal-M"
                    },
                    "index": 1
                },
                {
                    "signal": {
                        "type": "virtual",
                        "name": "signal-E"
                    },
                    "index": 2
                },
                {
                    "signal": {
                        "type": "virtual",
                        "name": "signal-black"
                    },
                    "index": 3
                },
                {
                    "signal": {
                        "type": "virtual",
                        "name": "signal-black"
                    },
                    "index": 4
                }
            ],
            "entities": [],
            "item": "blueprint",
            "label": "Factorio-Make-Everything",
            "version": 281474976710656
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

    const [expandedAccordion, setExpandedAccordion] = React.useState<string | false>("MODDED QUESTION");
    const changeAccordion = (panel: string) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
        setExpandedAccordion(isExpanded ? panel : false);
    };

    const inputRef = useRef<TextFieldProps>();

    const [debugInfo, setDebugInfo] = useState<any>({});

    // const [modded, setModded] = useState<boolean>(false);

    function changeModded(isModded: boolean) {
        // setModded(isModded);
        if (isModded) {
            setExpandedAccordion('CHEAT COMMAND');
        } else {
            parseIt(VanillaRecipes);
            setExpandedAccordion('RECIPES');
        }
    }

    const settingsRef = {
        machineName: useRef<TextFieldProps>(),
        machineWidth: useRef<TextFieldProps>(),
        machineHeight: useRef<TextFieldProps>(),
        machineSpeed: useRef<TextFieldProps>(),
        rowLength: useRef<TextFieldProps>(),
        machineSpace: useRef<TextFieldProps>(),
        rowSpace: useRef<TextFieldProps>(),
        sourceChestName: useRef<TextFieldProps>(),
        requestFromBuffers: useRef<HTMLInputElement | null>(null),
        sourceChestWidth: useRef<TextFieldProps>(),
        sourceChestHeight: useRef<TextFieldProps>(),
        targetChestName: useRef<TextFieldProps>(),
        targetChestSetRequest: useRef<HTMLInputElement | null>(null),
        targetChestWidth: useRef<TextFieldProps>(),
        targetChestHeight: useRef<TextFieldProps>(),
        inserterName: useRef<TextFieldProps>(),
        outserterName: useRef<TextFieldProps>(),
    }

    function settingsRefToSettings(): Settings {
        return {
            machineName: settingsRef.machineName.current?.value as string || 'assembling-machine-3',
            machineWidth: parseInt(settingsRef.machineWidth.current?.value as string) || 3,
            machineHeight: parseInt(settingsRef.machineHeight.current?.value as string) || 3,
            machineSpeed: parseFloat(settingsRef.machineSpeed.current?.value as string) || 1.25,
            rowLength: parseInt(settingsRef.rowLength.current?.value as string) || 5,
            machineSpace: parseInt(settingsRef.machineSpace.current?.value as string) || 0,
            rowSpace: parseInt(settingsRef.rowSpace.current?.value as string) || 0,
            sourceChestName: settingsRef.sourceChestName.current?.value as string || 'logistic-chest-requester',
            requestFromBuffers: settingsRef.requestFromBuffers.current?.checked ?? true,
            sourceChestWidth: parseInt(settingsRef.sourceChestWidth.current?.value as string) || 1,
            sourceChestHeight: parseInt(settingsRef.sourceChestHeight.current?.value as string) || 1,
            targetChestName: settingsRef.targetChestName.current?.value as string || 'logistic-chest-buffer',
            targetChestSetRequest: settingsRef.targetChestSetRequest.current?.checked ?? true,
            targetChestWidth: parseInt(settingsRef.targetChestWidth.current?.value as string) || 1,
            targetChestHeight: parseInt(settingsRef.targetChestHeight.current?.value as string) || 1,
            inserterName: settingsRef.inserterName.current?.value as string || 'stack-inserter',
            outserterName: settingsRef.outserterName.current?.value as string || 'stack-inserter',
        }
    }

    return (
        <>
            <div id="header">
                <h1>Factorio "Make Everything" Generator</h1>
            </div>
            <div id="body">
                <Accordion expanded={expandedAccordion === 'MODDED QUESTION'} onChange={changeAccordion('MODDED QUESTION')}>
                    <AccordionSummary>MODDED?</AccordionSummary>
                    <AccordionDetails style={{ display: "block" }}>
                        <Typography>
                            Do you have moddeds items/recipes? Or do you play vanilla?
                    </Typography>
                        <div>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={() => changeModded(true)}
                            >
                                Modded
                        </Button>
                        &nbsp;
                        <Button
                                variant="contained"
                                color="primary"
                                onClick={() => changeModded(false)}
                            >
                                Vanilla
                        </Button>
                        </div>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expandedAccordion === 'CHEAT COMMAND'} onChange={changeAccordion('CHEAT COMMAND')}>
                    <AccordionSummary>CHEAT COMMAND</AccordionSummary>
                    <AccordionDetails style={{ display: "block" }}>
                        <Typography>
                            Execute this cheat command ingame and find a "recipes_dump.txt" afterwards in your script-output folder of Factorio:
                    </Typography>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={() => copy(command)}
                        >
                            <FileCopyIcon /> Copy Cheat Command
                    </Button>
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
                                        <div className="dropzone" {...getRootProps()}>
                                            <input {...getInputProps()} />
                                            <p>drag & drop recipes_dump.txt file here</p>
                                            <p><VerticalAlignBottomIcon fontSize="large" /></p>
                                            <p>or click to select file</p>
                                        </div>
                                    </section>
                                )}
                            </Dropzone>
                        </div>
                        <div>
                            <p>Or you can simply copy the content and paste it:</p>
                            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                                Paste content
                        </Button>
                            <Dialog
                                open={inputDialogOpen}
                                onClose={() => setInputDialogOpen(false)}
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
                        <div>
                            <p>Machine</p>
                            <TextField
                                label="machine name"
                                variant="filled"
                                inputRef={settingsRef.machineName}
                                defaultValue='assembling-machine-3'
                            />
                            <TextField
                                label="machine width"
                                variant="filled"
                                inputRef={settingsRef.machineWidth}
                                defaultValue='3'
                                type="number"
                            />
                            <TextField
                                label="machine height"
                                variant="filled"
                                inputRef={settingsRef.machineHeight}
                                defaultValue='3'
                                type="number"
                            />
                            <TextField
                                label="machine speed"
                                variant="filled"
                                inputRef={settingsRef.machineSpeed}
                                defaultValue='1.25'
                                type="number"
                            />
                        </div>
                        <div>
                            <p>Layout</p>
                            <TextField
                                label="row length"
                                variant="filled"
                                inputRef={settingsRef.rowLength}
                                defaultValue='5'
                                type="number"
                            />
                            <TextField
                                label="machine space"
                                variant="filled"
                                inputRef={settingsRef.machineSpace}
                                defaultValue='0'
                                type="number"
                            />
                            <TextField
                                label="row space"
                                variant="filled"
                                inputRef={settingsRef.rowSpace}
                                defaultValue='0'
                                type="number"
                            />
                        </div>
                        <div>
                            <p>Source Chest</p>
                            <TextField
                                label="source chest name"
                                variant="filled"
                                inputRef={settingsRef.sourceChestName}
                                defaultValue='logistic-chest-requester'
                            />
                            <TextField
                                label="source chest width"
                                variant="filled"
                                inputRef={settingsRef.sourceChestWidth}
                                defaultValue='1'
                                type="number"
                            />
                            <TextField
                                label="source chest height"
                                variant="filled"
                                inputRef={settingsRef.sourceChestHeight}
                                defaultValue='1'
                                type="number"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        inputRef={settingsRef.requestFromBuffers}
                                        defaultChecked={true}
                                    />
                                }
                                label="request from buffers"
                            />
                        </div>
                        <div>
                            <p>Target Chest</p>
                            <TextField
                                label="target chest name"
                                variant="filled"
                                inputRef={settingsRef.targetChestName}
                                defaultValue='logistic-chest-buffer'
                            />
                            <TextField
                                label="target chest width"
                                variant="filled"
                                inputRef={settingsRef.targetChestWidth}
                                defaultValue='1'
                                type="number"
                            />
                            <TextField
                                label="target chest height"
                                variant="filled"
                                inputRef={settingsRef.targetChestHeight}
                                defaultValue='1'
                                type="number"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        inputRef={settingsRef.targetChestSetRequest}
                                        defaultChecked={true}
                                    />
                                }
                                label="target chest set request"
                            />
                        </div>
                        <div>
                            <p>Inserter/Outserter</p>
                            <TextField
                                label="inserter name"
                                variant="filled"
                                inputRef={settingsRef.inserterName}
                                defaultValue='stack-inserter'
                            />
                            <TextField
                                label="outserter name"
                                variant="filled"
                                inputRef={settingsRef.outserterName}
                                defaultValue='stack-inserter'
                            />
                        </div>
                    </AccordionDetails>
                </Accordion>

                <Accordion expanded={expandedAccordion === 'GENERATE'} onChange={changeAccordion('GENERATE')}>
                    <AccordionSummary>GENERATE</AccordionSummary>
                    <AccordionDetails style={{ display: "block" }}>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={() => {
                                const { bpObject, bpString } = generateOutput(filteredRecipes, settingsRefToSettings());
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
            </div>
            <div id="footer">
                <a href="https://github.com/JensForstmann/factorio-make-everything-generator">GitHub</a>
            </div>
        </>
    );
}

export default App;