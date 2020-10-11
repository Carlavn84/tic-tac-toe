import { CELL_VALUE_EMPTY } from '../enums/CELL_VALUE.js';

function checkWinner(board) {
	// if 3 cells have the same content that !== CELL_VALUE_EMPTY, we have a winner

	// check each row
	const winnerOnRow1 =
		board[0][0] !== CELL_VALUE_EMPTY &&
		board[0][0] === board[0][1] &&
		board[0][1] === board[0][2];
	if (winnerOnRow1) {
		return true;
	}
	const winnerOnRow2 =
		board[1][0] !== CELL_VALUE_EMPTY &&
		board[1][0] === board[1][1] &&
		board[1][1] === board[1][2];
	if (winnerOnRow2) {
		return true;
	}
	const winnerOnRow3 =
		board[2][0] !== CELL_VALUE_EMPTY &&
		board[2][0] === board[2][1] &&
		board[2][1] === board[2][2];
	if (winnerOnRow3) {
		return true;
	}

	// check each column
	const winnerOnColumn1 =
		board[0][0] !== CELL_VALUE_EMPTY &&
		board[0][0] === board[1][0] &&
		board[1][0] === board[2][0];
	if (winnerOnColumn1) {
		return true;
	}
	const winnerOnColumn2 =
		board[0][1] !== CELL_VALUE_EMPTY &&
		board[0][1] === board[1][1] &&
		board[1][1] === board[2][1];
	if (winnerOnColumn2) {
		return true;
	}
	const winnerOnColumn3 =
		board[0][2] !== CELL_VALUE_EMPTY &&
		board[0][2] === board[1][2] &&
		board[1][2] === board[2][2];
	if (winnerOnColumn3) {
		return true;
	}

	// check each diagonal
	const winnerOnDiagonal1 =
		board[0][0] !== CELL_VALUE_EMPTY &&
		board[0][0] === board[1][1] &&
		board[1][1] === board[2][2];
	if (winnerOnDiagonal1) {
		return true;
	}
	const winnerOnDiagonal2 =
		board[2][0] !== CELL_VALUE_EMPTY &&
		board[2][0] === board[1][1] &&
		board[1][1] === board[0][2];
	if (winnerOnDiagonal2) {
		return true;
	}
	// (no need to determine who won here, the rest of the App already knows)
	return false;
}

export default checkWinner;
