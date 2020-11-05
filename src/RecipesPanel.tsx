import React from 'react';
import Button from '@material-ui/core/Button';
import MUIDataTable from 'mui-datatables';
import RecipesImport from './RecipesImport';

import './RecipesPanel.css';

export function parseDump(input: string) {
	const recipesInput = input.split('-----');

	const recipes: Recipe[] = [];
	for (let i = 0; i < recipesInput.length; i++) {
		const recipeInput = recipesInput[i].trim();
		const lines = recipeInput.split('\n');
		const recipe = {
			item_ingredients: [],
		} as any;

		let isValid = false;
		for (let l = 0; l < lines.length; l++) {
			const line = lines[l].trim();
			if (line) {
				isValid = true;
				const parts = line.split(':');
				const key = parts.shift();
				const value = parts.join(':').trim();
				if (key === 'item_ingredient_name') {
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

export type Recipe = {
	name: string;
	enabled: boolean;
	hidden: boolean;
	unlock_results: boolean;
	category: string;
	order: string;
	energy: number;
	group_name: string;
	group_order: string;
	subgroup_name: string;
	subgroup_order: string;
	request_paste_multiplier: number;
	main_product: string;
	main_product_stack_size: number;
	item_ingredients: string[];
};

const TABLE_COLUMNS = [
	{
		name: 'name',
		options: {
			filter: false,
			sortThirdClickReset: true,
		},
	},
	{
		name: 'category',
		options: {
			sortThirdClickReset: true,
		},
	},
	{
		name: 'group_name',
		label: 'group',
		options: {
			sortThirdClickReset: true,
		},
	},
	{
		name: 'subgroup_name',
		label: 'subgroup',
		options: {
			sortThirdClickReset: true,
		},
	},
];

type Props = {
	recipes: Recipe[];
	onSelectionChange: (selectedRecipes: number[]) => void;
	setRecipes: (recipes: Recipe[]) => void;
};

type State = {
	showRecipesImport: boolean;
};

class RecipesPanel extends React.Component<Props, State> {
	state: Readonly<State> = {
		showRecipesImport: false,
	};

	constructor(props: Props) {
		super(props);

		this.showRecipesImport = this.showRecipesImport.bind(this);
	}

	showRecipesImport(show: boolean = true) {
		this.setState({
			showRecipesImport: show,
		});
	}

	render() {
		return (
			<div>
				<Button
					onClick={() => this.showRecipesImport()}
					color="primary"
					variant="outlined"
					id="importDialogButton"
				>
					Import Custom Recipes (modded gameplay)
				</Button>

				<RecipesImport
					dialogOpen={this.state.showRecipesImport}
					closeDialog={() => this.showRecipesImport(false)}
					setRecipes={this.props.setRecipes}
				/>

				<MUIDataTable
					title={''}
					data={this.props.recipes}
					columns={TABLE_COLUMNS}
					options={{
						filterType: 'multiselect',
						download: false,
						print: false,
						viewColumns: false,
						selectToolbarPlacement: 'none',
						onRowSelectionChange: (
							currentRowsSelected,
							allRowsSelected,
							rowsSelected
						) => this.props.onSelectionChange(rowsSelected as number[]),
					}}
				/>
			</div>
		);
	}
}

export default RecipesPanel;
