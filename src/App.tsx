import { Accordion, AccordionDetails, AccordionSummary, Button } from '@material-ui/core';
import React from 'react';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import SettingsPanel, { Settings } from './SettingsPanel';
import RecipesPanel, { Recipe, parseDump } from './RecipesPanel';
import VanillaRecipes from './VanillaRecipes'
import copy from 'copy-to-clipboard';
import { generateBlueprint } from './BlueprintGeneration';

import './App.css';

type Props = {};

type Panel = "SETTINGS" | "RECIPES";

type State = {
    settings: Settings;
    recipes: Recipe[];
    activePanel: Panel | null;
};

class App extends React.Component<Props, State> {

    state: Readonly<State> = {
        settings: {
            machineName: 'assembling-machine-3',
            machineWidth: 3,
            machineHeight: 3,
            machineSpeed: 1.25,
            rowLength: 5,
            machineSpace: 0,
            rowSpace: 0,
            sourceChestName: 'logistic-chest-requester',
            requestFromBuffers: true,
            sourceChestWidth: 1,
            sourceChestHeight: 1,
            targetChestName: 'logistic-chest-buffer',
            targetChestSetRequest: true,
            targetChestWidth: 1,
            targetChestHeight: 1,
            inserterName: 'stack-inserter',
            outserterName: 'stack-inserter',
        },
        activePanel: "RECIPES",
        recipes: []
    }

    selectedRecipes: number[] = [];

    constructor(props: Props) {
        super(props);

        this.loadVanillaRecipes = this.loadVanillaRecipes.bind(this);
        this.handleSettingsChange = this.handleSettingsChange.bind(this);
        this.setRecipes = this.setRecipes.bind(this);
        this.handleSelectedRecipesChange = this.handleSelectedRecipesChange.bind(this);
        this.showPanel = this.showPanel.bind(this);
        this.getSelectedRecipes = this.getSelectedRecipes.bind(this);

    }

    componentDidMount() {
        this.loadVanillaRecipes();
    }

    loadVanillaRecipes() {
        const recipes = parseDump(VanillaRecipes).recipes;
        this.setState({
            recipes: recipes
        });
    }

    handleSettingsChange(settings: Partial<Settings>) {
        this.setState({
            settings: {
                ...this.state.settings,
                ...settings
            }
        });
    }

    setRecipes(recipes: Recipe[]) {
        this.setState({
            recipes: recipes,
        });
        this.selectedRecipes = []
    }

    handleSelectedRecipesChange(selectedRecipes: number[]) {
        this.selectedRecipes = selectedRecipes;
    }

    showPanel(panel: Panel, expanded: boolean) {
        this.setState({
            activePanel: expanded ? panel : null
        });
    }

    getSelectedRecipes() {
        return this.state.recipes.filter((recipe, index) => this.selectedRecipes.includes(index));
    }

    render() {
        return (
            <>
                <div id="header">
                    <h1>"Make Everything" Generator for Factorio</h1>
                    <p>
                        This app can be used to build bot based malls/hubs.
                <br /><br />
                It's under development and still in an early stage.
                </p>
                </div>
                <div id="body">
                    <Accordion expanded={this.state.activePanel === 'RECIPES'} onChange={(e, expanded) => this.showPanel('RECIPES', expanded)}>
                        <AccordionSummary>RECIPES</AccordionSummary>
                        <AccordionDetails style={{ display: "block" }}>
                            <RecipesPanel
                                recipes={this.state.recipes}
                                setRecipes={this.setRecipes}
                                onSelectionChange={this.handleSelectedRecipesChange}
                            />
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={this.state.activePanel === 'SETTINGS'} onChange={(e, expanded) => this.showPanel('SETTINGS', expanded)}>
                        <AccordionSummary>SETTINGS</AccordionSummary>
                        <AccordionDetails style={{ display: "block" }}>
                            <SettingsPanel
                                settings={this.state.settings}
                                onChange={this.handleSettingsChange}
                            />
                        </AccordionDetails>
                    </Accordion>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => {
                            const { blueprintString } = generateBlueprint(this.getSelectedRecipes(), this.state.settings);
                            copy(blueprintString);
                        }}
                        id="copyBlueprintButton"
                    >
                        <FileCopyIcon /> Copy Blueprint
                    </Button>
                </div>
                <div id="footer">
                    <a href="https://github.com/JensForstmann/factorio-make-everything-generator">GitHub</a>
                </div>
            </>
        );
    }

}

export default App;
