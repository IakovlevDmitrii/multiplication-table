import React from "react";
import styles from './MultiplicationTableList.module.scss';

export default function MultiplicationTableList({ multiplier }) {
	const list = [];

	for(let num = 2; num <= 9; num++) {
		list.push({
			num,
			result: num * multiplier,
		})
	}

	const multiplicationTable = list
		.map(item => (
				<li key={item.num}>
					{`${multiplier} * ${item.num} = ${item.result}`}
				</li>
			)
		);

	return (
		<div className={styles.content}>
			<ol className={styles.list}>
				{multiplicationTable}
			</ol>
		</div>
	)
}