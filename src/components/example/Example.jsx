import React from 'react';
import style from './example.module.scss';

export default function Example() {

	const number1 = 2;
	const number2 = 2;

	return (
		<div className={style.example}>
			{number1} * {number2}
		</div>
	)
}