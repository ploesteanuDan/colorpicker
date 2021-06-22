import React, { useState } from 'react';
import '../styles/ColorPicker.scss';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faLockOpen } from '@fortawesome/free-solid-svg-icons';
let predefColors = [
	{
		locked: false,
		name: 'primary',
		size: 40,
		color: 'red'
	},
	{
		locked: false,
		name: 'secondary',
		size: 30,
		color: 'blue'
	},
	{
		locked: false,
		name: 'accent1',
		size: 15,
		color: '#ffffff'
	},
	{
		locked: false,
		name: 'accent2',
		size: 15,
		color: 'grey'
	}
];

export default function ColorPicker() {
	const [ colors, setColors ] = useState(predefColors);
	function allRandom() {
		let newColors = colors;
		newColors.forEach((c) => {
			if (!c.locked) c.color = '#' + Math.floor(Math.random() * 16777215).toString(16);
		});
		setColors([ ...newColors ]);
	}
	function lockMe(i) {
		let newColors = colors;
		newColors.forEach((c, index) => {
			if (index === i) c.locked ? (c.locked = false) : (c.locked = true);
		});
		setColors([ ...newColors ]);
	}
	return (
		<div className="colorPickerContainer">
			{colors.map((col, i) => (
				<li style={{ backgroundColor: col.color, height: col.size + '%' }}>
					<div
						className="colorContainer"
						onClick={() => {
							lockMe(i);
						}}
					>
						<FontAwesomeIcon icon={col.locked ? faLock : faLockOpen} />
						<p>{col.color}</p>
					</div>
				</li>
			))}
			<div
				className="changeColorButton"
				onClick={() => {
					allRandom();
				}}
			>
				Get Lucky
			</div>
		</div>
	);
}
