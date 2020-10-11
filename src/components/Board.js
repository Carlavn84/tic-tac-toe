import React from 'react';

import Cell from './Cell.js';

import './Board.css';

function Board({ board, cellValueForCurrentPlayer, isDisabled, onCellClick }) {
	return (
		<div className="Board">
			<div className="Row">
				<Cell
					cellId={0}
					cellValueForCurrentPlayer={cellValueForCurrentPlayer}
					isDisabled={isDisabled}
					onCellClick={onCellClick}
					rowId={0}
					value={board[0][0]}
				/>
				<Cell
					cellId={1}
					cellValueForCurrentPlayer={cellValueForCurrentPlayer}
					isDisabled={isDisabled}
					onCellClick={onCellClick}
					rowId={0}
					value={board[0][1]}
				/>
				<Cell
					cellId={2}
					cellValueForCurrentPlayer={cellValueForCurrentPlayer}
					isDisabled={isDisabled}
					onCellClick={onCellClick}
					rowId={0}
					value={board[0][2]}
				/>
			</div>
			<div className="Row">
				<Cell
					cellId={0}
					cellValueForCurrentPlayer={cellValueForCurrentPlayer}
					isDisabled={isDisabled}
					onCellClick={onCellClick}
					rowId={1}
					value={board[1][0]}
				/>
				<Cell
					cellId={1}
					cellValueForCurrentPlayer={cellValueForCurrentPlayer}
					isDisabled={isDisabled}
					onCellClick={onCellClick}
					rowId={1}
					value={board[1][1]}
				/>
				<Cell
					cellId={2}
					cellValueForCurrentPlayer={cellValueForCurrentPlayer}
					isDisabled={isDisabled}
					onCellClick={onCellClick}
					rowId={1}
					value={board[1][2]}
				/>
			</div>
			<div className="Row">
				<Cell
					cellId={0}
					cellValueForCurrentPlayer={cellValueForCurrentPlayer}
					isDisabled={isDisabled}
					onCellClick={onCellClick}
					rowId={2}
					value={board[2][0]}
				/>
				<Cell
					cellId={1}
					cellValueForCurrentPlayer={cellValueForCurrentPlayer}
					isDisabled={isDisabled}
					onCellClick={onCellClick}
					rowId={2}
					value={board[2][1]}
				/>
				<Cell
					cellId={2}
					cellValueForCurrentPlayer={cellValueForCurrentPlayer}
					isDisabled={isDisabled}
					onCellClick={onCellClick}
					rowId={2}
					value={board[2][2]}
				/>
			</div>
		</div>
	);
}

export default Board;
