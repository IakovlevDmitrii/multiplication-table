import React, {Dispatch} from 'react';
import {NavLink} from "react-router-dom";
import {useTraining, useTrainingDispatch} from "../../../../state/state";
import styles from './SelectMultiplierList.module.scss';

export default function SelectMultiplierList(): React.JSX.Element {
	const dispatch: Dispatch<any> = useTrainingDispatch();
	const {multiplierList} = useTraining();

	function handleChangeSubjectOfRepetition(num: number): void {
		dispatch({
			type: 'changeSubjectOfRepetition',
			payload: {
				subjectOfRepetition: num,
			},
		})
	}

	const selectMultiplierList :React.JSX.Element = (
		<ol className={styles.multiplierList}>
			{
				multiplierList.map((index :number): React.JSX.Element => (
					<li key={index}>
						<NavLink
							className={styles.link}
							to={`/multiplication-table/${index}`}
							onClick={(): void => handleChangeSubjectOfRepetition(index)}
						>
							x {index}
						</NavLink>
					</li>
				))
			}
		</ol>
	);

	return (
		<main>
			<section className={styles.content}>
				{selectMultiplierList}
			</section>
		</main>
	)
}