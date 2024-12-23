import React, { useState } from 'react';
import { getNewRandomInteger } from '../../utils';
import style from './example.module.scss';

export default function Example() {

	const number1 = 2;
	const [number2, setNumber2] = useState(2);

	function handleClick() {
		setNumber2(getNewRandomInteger(1, 10, number2));
	}

	return (
		<div className={style.content}>
			<div className={style.numbers}>
				{number1} * {number2}
			</div>
			<button onClick={handleClick}>
				Next
			</button>
		</div>

	)
}