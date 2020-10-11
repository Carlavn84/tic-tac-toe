import React, { useCallback, useState } from 'react';
import { CELL_VALUE_EMPTY } from 'enums/CELL_VALUE';

import './Cell.css';

function Cell({ cellId, cellValueForCurrentPlayer, isDisabled, onCellClick, rowId, value }) {
	const [isHovered, setIsHovered] = useState(false);

	const handleMouseOut = () => setIsHovered(false);
	const handleMouseOver = () => setIsHovered(true);

	const handleClick = useCallback(() => {
		setIsHovered(false);

		onCellClick(rowId, cellId);
	}, [cellId, onCellClick, rowId]);

	return (
		<div
			className={isHovered ? 'Cell Cell-isHovered' : 'Cell'}
			onMouseOut={isDisabled || value !== CELL_VALUE_EMPTY ? null : handleMouseOut}
			onMouseOver={isDisabled || value !== CELL_VALUE_EMPTY ? null : handleMouseOver}
			onClick={isDisabled || value ? null : handleClick}
		>
			{isHovered ? cellValueForCurrentPlayer : value}
		</div>
	);
}

export default Cell;
