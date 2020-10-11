import { PHASE_UNKNOWN } from './enums/PHASE.js';
import { PLAYER_UNKNOWN } from './enums/PLAYER.js';

const initialGameState = {
	board: [['', '', ''], ['', '', ''], ['', '', '']],
	currentPlayer: PLAYER_UNKNOWN,
	phase: PHASE_UNKNOWN
};

export default initialGameState;
