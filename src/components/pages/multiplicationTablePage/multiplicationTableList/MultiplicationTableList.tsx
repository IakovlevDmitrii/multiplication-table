import React from "react";
import {useTraining} from "../../../../state/state";
import styles from './MultiplicationTableList.module.scss';

export default function MultiplicationTableList(): React.JSX.Element {
	const {
		multiplierList,
		subjectOfRepetition} = useTraining();

	const multiplicationTable: React.JSX.Element = (
		<ol className={styles.example_list}>
			{
				multiplierList.map(index => (
					<li key={index}>
						<div className={styles.example}>
							<div className={styles.condition}>
								{`${subjectOfRepetition} * ${index} = `}
							</div>
							<div className={styles.result}>
								{`${subjectOfRepetition * index}`}
							</div>
						</div>
					</li>
				))
			}
		</ol>
	);

	return (
		<main>
			<article className={styles.content}>
				{multiplicationTable}
			</article>
		</main>
	)
}