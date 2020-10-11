import React from 'react';

import { PHASE_UNKNOWN, PHASE_RUNNING, PHASE_DRAWN, PHASE_OVER } from '../enums/PHASE.js';
import { PLAYER_1, PLAYER_2 } from '../enums/PLAYER.js';

import cellValueByPlayer from '../mappings/cellValueByPlayer.js';

import './StatusMessage.css';

const createStatusMessageByPhase = {
	[PHASE_UNKNOWN]: () => 'Please fill out the player names before starting the game.',
	[PHASE_RUNNING]: (currentPlayer, playerName1, playerName2) => {
		const currentPlayerName = currentPlayer === PLAYER_1 ? playerName1 : playerName2;
		const currentPlayerCellValue = cellValueByPlayer[currentPlayer];
		return `Game running… it's ${currentPlayerName}'s (${currentPlayerCellValue}) turn to play.`;
	},
	[PHASE_DRAWN]: (currentPlayer, playerName1, playerName2) => {
		const currentPlayerName = currentPlayer === PLAYER_1 ? playerName1 : playerName2;
		const currentPlayerCellValue = cellValueByPlayer[currentPlayer];
		const otherPlayerName = currentPlayer === PLAYER_1 ? playerName2 : playerName1;
		const otherPlayerCellValue =
			cellValueByPlayer[currentPlayer === PLAYER_1 ? PLAYER_2 : PLAYER_1];
		return `Game drawn. Nice save ${currentPlayerName} (${currentPlayerCellValue}), nice try ${otherPlayerName} (${otherPlayerCellValue}).`;
	},
	[PHASE_OVER]: (currentPlayer, playerName1, playerName2) => {
		const currentPlayerName = currentPlayer === PLAYER_1 ? playerName1 : playerName2;
		const currentPlayerCellValue = cellValueByPlayer[currentPlayer];
		const otherPlayerName = currentPlayer === PLAYER_1 ? playerName2 : playerName1;
		const otherPlayerCellValue =
			cellValueByPlayer[currentPlayer === PLAYER_1 ? PLAYER_2 : PLAYER_1];
		return `Game over. Congratulations ${currentPlayerName} (${currentPlayerCellValue}), nice try ${otherPlayerName} (${otherPlayerCellValue}).`;
	}
};

const classNameByPhase = {
	[PHASE_UNKNOWN]: 'StatusMessage StatusMessage-info',
	[PHASE_RUNNING]: 'StatusMessage StatusMessage-info',
	[PHASE_DRAWN]: 'StatusMessage StatusMessage-attention',
	[PHASE_OVER]: 'StatusMessage StatusMessage-attention'
};

function StatusMessage({ currentPlayer, phase, playerName1, playerName2 }) {
	const createStatusMessage = createStatusMessageByPhase[phase];

	return (
		<div className={classNameByPhase[phase]}>
			{createStatusMessage(currentPlayer, playerName1, playerName2)}
		</div>
	);
}

export default StatusMessage;
