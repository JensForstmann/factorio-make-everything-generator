import { Typography } from '@mui/material';
import React from 'react';
import ResultImage1 from './result_1.png';
import ResultImage2 from './result_2.png';
import ResultImage3 from './result_3.png';
import ResultImage4 from './result_4.png';

import './Help.css';

type Props = {
	// dialogOpen: boolean;
	// closeDialog: () => void;
};

class Help extends React.Component<Props, {}> {
	render() {
		return (
			<div id="helpSection">
				<Typography>
					This generator gives you a blueprint to produce the selected recipes.
					<br />
					<img src={ResultImage1} alt="assembling machines" />
				</Typography>
				<Typography>
					The requester chest will request the items you need for the recipe. It will
					respect the speed of the machine and the time needed to craft the item.
					<br />
					<img src={ResultImage2} alt="requester chest" />
				</Typography>
				<Typography>
					The outserter will prevent producing too much of one item.
					<br />
					<img src={ResultImage3} alt="outserter" />
				</Typography>
				<Typography>
					The buffer chest will request the product so manually picking up items is as
					easy as always.
					<br />
					<img src={ResultImage4} alt="buffer chest" />
				</Typography>
				<Typography>
					This app and the generated blueprint can be fully customized by changing several
					settings.
					<br />
					Mods are also fully supported via a cheat command to extract the recipes from
					your current game.
				</Typography>
			</div>
		);
	}
}

export default Help;
