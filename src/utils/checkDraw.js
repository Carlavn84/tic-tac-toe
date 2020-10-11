import { CELL_VALUE_EMPTY } from '../enums/CELL_VALUE.js';

function checkDraw(board) {
	// check each row
	// check each column
	// if all have content that !== CELL_VALUE_EMPTY, its a draw
	for (let row = 0; row <= 2; ++row) {
		for (let cell = 0; cell <= 2; ++cell) {
			if (board[row][cell] === CELL_VALUE_EMPTY) {
				return false;
			}
		}
	}
	return true;
}

export default checkDraw;
