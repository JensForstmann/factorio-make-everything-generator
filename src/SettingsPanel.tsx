import React from 'react';
import { Checkbox, FormControlLabel, TextField } from '@mui/material';

import './SettingsPanel.css';

export type Settings = {
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
	craftStackLimit: number;
	requestStackLimit: number;
};

type Props = {
	settings: Settings;
	onChange: (settings: Partial<Settings>) => void;
};

class SettingsPanel extends React.Component<Props, {}> {
	render() {
		return (
			<>
				<div>
					<p>Machine</p>
					<TextField
						label="machine name"
						variant="filled"
						value={this.props.settings.machineName}
						onChange={(e) => this.props.onChange({ machineName: e.target.value })}
					/>
					<TextField
						label="machine width"
						variant="filled"
						value={this.props.settings.machineWidth}
						onChange={(e) =>
							this.props.onChange({ machineWidth: parseInt(e.target.value) })
						}
						type="number"
					/>
					<TextField
						label="machine height"
						variant="filled"
						value={this.props.settings.machineHeight}
						onChange={(e) =>
							this.props.onChange({ machineHeight: parseInt(e.target.value) })
						}
						type="number"
					/>
					<TextField
						label="machine speed"
						variant="filled"
						value={this.props.settings.machineSpeed}
						onChange={(e) =>
							this.props.onChange({ machineSpeed: parseFloat(e.target.value) })
						}
						type="number"
					/>
				</div>
				<div>
					<p>Layout</p>
					<TextField
						label="row length"
						variant="filled"
						value={this.props.settings.rowLength}
						onChange={(e) =>
							this.props.onChange({ rowLength: parseInt(e.target.value) })
						}
						type="number"
					/>
					<TextField
						label="machine space"
						variant="filled"
						value={this.props.settings.machineSpace}
						onChange={(e) =>
							this.props.onChange({ machineSpace: parseInt(e.target.value) })
						}
						type="number"
					/>
					<TextField
						label="row space"
						variant="filled"
						value={this.props.settings.rowSpace}
						onChange={(e) =>
							this.props.onChange({ rowSpace: parseInt(e.target.value) })
						}
						type="number"
					/>
				</div>
				<div>
					<p>Source Chest</p>
					<TextField
						label="source chest name"
						variant="filled"
						value={this.props.settings.sourceChestName}
						onChange={(e) => this.props.onChange({ sourceChestName: e.target.value })}
					/>
					<TextField
						label="source chest width"
						variant="filled"
						value={this.props.settings.sourceChestWidth}
						onChange={(e) =>
							this.props.onChange({ sourceChestWidth: parseInt(e.target.value) })
						}
						type="number"
					/>
					<TextField
						label="source chest height"
						variant="filled"
						value={this.props.settings.sourceChestHeight}
						onChange={(e) =>
							this.props.onChange({ sourceChestHeight: parseInt(e.target.value) })
						}
						type="number"
					/>
					<FormControlLabel
						control={<Checkbox checked={this.props.settings.requestFromBuffers} />}
						label="request from buffers"
					/>
				</div>
				<div>
					<p>Target Chest</p>
					<TextField
						label="target chest name"
						variant="filled"
						value={this.props.settings.targetChestName}
						onChange={(e) => this.props.onChange({ targetChestName: e.target.value })}
					/>
					<TextField
						label="target chest width"
						variant="filled"
						value={this.props.settings.targetChestWidth}
						onChange={(e) =>
							this.props.onChange({ targetChestWidth: parseInt(e.target.value) })
						}
						type="number"
					/>
					<TextField
						label="target chest height"
						variant="filled"
						value={this.props.settings.targetChestHeight}
						onChange={(e) =>
							this.props.onChange({ targetChestHeight: parseInt(e.target.value) })
						}
						type="number"
					/>
					<FormControlLabel
						control={<Checkbox checked={this.props.settings.targetChestSetRequest} />}
						label="target chest set request"
					/>
				</div>
				<div>
					<p>Inserter/Outserter</p>
					<TextField
						label="inserter name"
						variant="filled"
						value={this.props.settings.inserterName}
						onChange={(e) => this.props.onChange({ inserterName: e.target.value })}
					/>
					<TextField
						label="outserter name"
						variant="filled"
						value={this.props.settings.outserterName}
						onChange={(e) => this.props.onChange({ outserterName: e.target.value })}
					/>
				</div>
				<div>
					<p>Limits</p>
					<TextField
						label="request stack limit"
						variant="filled"
						value={this.props.settings.requestStackLimit}
						onChange={(e) =>
							this.props.onChange({ requestStackLimit: parseInt(e.target.value) })
						}
						type="number"
					/>
					<TextField
						label="craft stack limit"
						variant="filled"
						value={this.props.settings.craftStackLimit}
						onChange={(e) =>
							this.props.onChange({ craftStackLimit: parseInt(e.target.value) })
						}
						type="number"
					/>
				</div>
			</>
		);
	}
}

export default SettingsPanel;
