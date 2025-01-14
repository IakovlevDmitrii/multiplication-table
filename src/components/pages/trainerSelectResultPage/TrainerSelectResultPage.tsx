import React, { Dispatch } from "react";
import { NavLink } from "react-router-dom";
import PageLayout from "../../pageLayout";
import Header from "../../header";
import arrowToLeft from '../../../img/arrow-to-left/arrow-to-left_color.png';
import { useTraining, useTrainingDispatch } from "../../../state/state";
import { fillArrayWithUniqueRandomNumbers, getRandomElementFromArray } from "../../../utils";
import { type Answer } from "../../../types";
import styles from './TrainerSelectResultPage.module.scss';

const TrainerSelectResultPage: () => React.JSX.Element = (): React.JSX.Element => {
	const {
		answers,
		multiplierList,
		remainingMultiplierList,
		subjectOfRepetition
	} = useTraining();
	const dispatch: Dispatch<any> = useTrainingDispatch();

	function handleLinkToBack() {
		dispatch({
			type: 'changeSubjectOfRepetition',
			payload: {
				subjectOfRepetition,
			},
		})
	}

	const leftSide: React.JSX.Element = (
		<NavLink
			to={`/multiplication-table/${subjectOfRepetition}`}
			className={styles.link}
			onClick={() => handleLinkToBack()}
		>
			<img src={arrowToLeft} alt='link to multiplication table' />
		</NavLink>
	);
	const title: React.JSX.Element = <h1>Выбери ответ</h1>

	const resultCounter = (function () {
		const results = {correct: 0, wrong: 0};

		answers.forEach(({multiplier, result}: Answer): void => {
			(multiplier * subjectOfRepetition === result) ?
				results.correct++ :
				results.wrong++
		})

		return results
	})();

	if(!remainingMultiplierList.length) {
		const header: React.JSX.Element = (
			<Header leftSide={leftSide} title={<h1>Твой результат</h1>}/>
		);

		const content: React.JSX.Element = (
			<article className={styles.content}>
				<header className={styles.header}>
					<div className={styles.correctCount}>
						{`верно: ${resultCounter.correct}`}
					</div>
					<div className={styles.count}>
						{`${answers.length} / ${multiplierList.length}`}
					</div>
					<div className={styles.wrongCount}>
						{`не верно: ${resultCounter.wrong}`}
					</div>
				</header>
				<div className={styles.links}>
					<NavLink
						className={styles.summaryLink}
						to='summary'
					>
						Посмотреть ответы
					</NavLink>
				</div>
			</article>
		)

		return <PageLayout header={header} content={content} />
	}

	let secondMultiplier: number = getRandomElementFromArray(remainingMultiplierList);
	const versionArray: number[] = fillArrayWithUniqueRandomNumbers(4, 2, 9, secondMultiplier);

	function handleAnswer(multiplier: number, result: number): void {
		dispatch({
			type: 'answer',
			payload: {
				multiplier,
				result,
			},
		});

		if(remainingMultiplierList.length) {
			secondMultiplier = getRandomElementFromArray(remainingMultiplierList);
		}
	}

	const versionList: React.JSX.Element = (
		<ul className={styles.version_list}>
			{
				versionArray.map((version: number): React.JSX.Element => (
					<li key={version}>
						<button
							className={styles.version}
							type="button"
							onClick={(): void => handleAnswer(
								secondMultiplier,
								subjectOfRepetition * version)}
						>
							{subjectOfRepetition * version}
						</button>
					</li>
				))
			}
		</ul>
	);

	const header: React.JSX.Element = (
		<Header leftSide={leftSide} title={title} />
	);

	const content: React.JSX.Element = (
		<article className={styles.content}>
			<header className={styles.header}>
				<div className={styles.correctCount}>
					{`верно: ${resultCounter.correct}`}
				</div>
				<div className={styles.count}>
					{`${answers.length} / ${multiplierList.length}`}
				</div>
				<div className={styles.wrongCount}>
					{`не верно: ${resultCounter.wrong}`}
				</div>
			</header>
			<div className={styles.condition}>
				<div className={styles.example}>
					{`${subjectOfRepetition} * ${secondMultiplier} = ?`}
				</div>
			</div>
			<div className={styles.solution}>
				{versionList}
			</div>
		</article>
	);

	return <PageLayout header={header} content={content} />
};

export default TrainerSelectResultPage;
