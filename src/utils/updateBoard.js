import cellValueByPlayer from '../mappings/cellValueByPlayer.js';

function updateBoard(gameState, rowId, cellId) {
	const newBoard = [];

	for (let row = 0; row <= 2; row++) {
		newBoard[row] = [];

		for (let cell = 0; cell <= 2; cell++) {
			newBoard[row][cell] =
				row === rowId && cell === cellId
					? cellValueByPlayer[gameState.currentPlayer]
					: gameState.board[row][cell];
		}
	}

	return newBoard;
}

export default updateBoard;
