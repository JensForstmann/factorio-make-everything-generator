import React from 'react';
import Dropzone from 'react-dropzone';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import copy from 'copy-to-clipboard';
import VerticalAlignBottomIcon from '@material-ui/icons/VerticalAlignBottom';
import { parseDump, Recipe } from './RecipesPanel';
import { Typography } from '@material-ui/core';
import CHEAT_COMMAND from './CheatCommand';

import './RecipesImport.css';

type Props = {
	setRecipes: (recipes: Recipe[]) => void;
	dialogOpen: boolean;
	closeDialog: () => void;
};

class RecipesImport extends React.Component<Props, {}> {
	constructor(props: Props) {
		super(props);

		this.onNewFile = this.onNewFile.bind(this);
	}

	async onNewFile(files: File[]) {
		if (files.length === 1) {
			const recipes = parseDump(await files[0].text()).recipes;
			this.props.setRecipes(recipes);
			this.props.closeDialog();
		}
	}

	render() {
		return (
			<Dialog open={this.props.dialogOpen} onClose={this.props.closeDialog}>
				<DialogTitle>Import Recipes</DialogTitle>
				<DialogContent>
					<Button
						variant="contained"
						color="primary"
						onClick={() => copy(CHEAT_COMMAND)}
						id="copyCheatCommandButton"
					>
						<FileCopyIcon /> Copy Cheat Command
					</Button>
					<Typography>
						Copy this cheat command and execute it ingame.
						<br />A file called "recipes_dump.txt" will be created in your script-output
						folder of Factorio which you must drop below.
					</Typography>
					<Dropzone
						onDrop={(files) => this.onNewFile(files)}
						multiple={false}
						accept="text/plain"
					>
						{({ getRootProps, getInputProps }) => (
							<section>
								<div className="dropzone" {...getRootProps()}>
									<input {...getInputProps()} />
									<p>drag & drop recipes_dump.txt here</p>
									<p>
										<VerticalAlignBottomIcon fontSize="large" />
									</p>
									<p>or click to select file</p>
								</div>
							</section>
						)}
					</Dropzone>
					<DialogActions>
						<Button onClick={this.props.closeDialog} color="secondary">
							Cancel
						</Button>
					</DialogActions>
				</DialogContent>
			</Dialog>
		);
	}
}

export default RecipesImport;
