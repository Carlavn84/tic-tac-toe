import React from 'react';

import { PHASE_RUNNING } from '../enums/PHASE.js';

import './Controls.css';

function Controls({
	onStartButtonClick,
	onPlayerName1Change,
	onPlayerName2Change,
	phase,
	playerName1,
	playerName2,
	startButtonLabel
}) {
	return (
		<div className="Controls">
			<div className="PlayerInputs">
				<label className="PlayerInputLabel">
					<span>Player 1:</span>
					<input
						disabled={phase === PHASE_RUNNING}
						onChange={onPlayerName1Change}
						value={playerName1}
						type="text"
					/>
				</label>

				<label className="PlayerInputLabel">
					<span>Player 2:</span>
					<input
						disabled={phase === PHASE_RUNNING}
						onChange={onPlayerName2Change}
						value={playerName2}
						type="text"
					/>
				</label>
			</div>

			<button
				className="Button"
				disabled={phase === PHASE_RUNNING || !playerName1 || !playerName2}
				onClick={onStartButtonClick}
			>
				{startButtonLabel}
			</button>
		</div>
	);
}

export default Controls;
