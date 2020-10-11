import React, { useCallback, useState } from 'react';

import Board from './components/Board.js';
import Controls from './components/Controls.js';
import Header from './components/Header.js';
import StatusMessage from './components/StatusMessage.js';

import { PLAYER_1, PLAYER_2 } from './enums/PLAYER.js';
import { PHASE_DRAWN, PHASE_OVER, PHASE_RUNNING } from './enums/PHASE.js';

import cellValueByPlayer from './mappings/cellValueByPlayer.js';

import checkDraw from './utils/checkDraw.js';
import checkWinner from './utils/checkWinner.js';
import updateBoard from './utils/updateBoard.js';

import initialGameState from './initialGameState.js';

import './App.css';

function App() {
	const [playerName1, setPlayerName1] = useState('');
	const [playerName2, setPlayerName2] = useState('');
	const [gameState, setGameState] = useState(initialGameState);

	const handlePlayerName1Change = event => setPlayerName1(event.target.value.trim());
	const handlePlayerName2Change = event => setPlayerName2(event.target.value.trim());

	const handleStartButtonClick = useCallback(
		() => setGameState({ ...initialGameState, currentPlayer: PLAYER_1, phase: PHASE_RUNNING }),
		[]
	);

	const handleCellClick = useCallback(
		(rowId, cellId) =>
			setGameState(gameState => {
				const newGameState = {
					board: updateBoard(gameState, rowId, cellId),
					currentPlayer: gameState.currentPlayer,
					phase: gameState.phase
				};

				if (checkWinner(newGameState.board)) {
					newGameState.phase = PHASE_OVER;
				} else if (checkDraw(newGameState.board)) {
					newGameState.phase = PHASE_DRAWN;
				} else {
					newGameState.currentPlayer =
						gameState.currentPlayer === PLAYER_1 ? PLAYER_2 : PLAYER_1;
				}

				return newGameState;
			}),
		[]
	);

	let startButtonLabel = 'Start game';
	if (gameState.phase === PHASE_RUNNING) {
		startButtonLabel = 'Game running…';
	} else if (gameState.phase === PHASE_DRAWN || gameState.phase === PHASE_OVER) {
		startButtonLabel = 'Start new game';
	}

	return (
		<div className="App">
			<Header>
				<h1 className="AppName">Tic-Tac-Toe</h1>

				<Controls
					onStartButtonClick={handleStartButtonClick}
					onPlayerName1Change={handlePlayerName1Change}
					onPlayerName2Change={handlePlayerName2Change}
					phase={gameState.phase}
					playerName1={playerName1}
					playerName2={playerName2}
					startButtonLabel={startButtonLabel}
				/>

				<StatusMessage
					currentPlayer={gameState.currentPlayer}
					phase={gameState.phase}
					playerName1={playerName1}
					playerName2={playerName2}
				/>
			</Header>

			<Board
				board={gameState.board}
				cellValueForCurrentPlayer={cellValueByPlayer[gameState.currentPlayer]}
				onCellClick={handleCellClick}
				isDisabled={gameState.phase !== PHASE_RUNNING}
			/>
		</div>
	);
}

export default App;
