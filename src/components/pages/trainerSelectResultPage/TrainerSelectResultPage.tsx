import React, {Dispatch} from "react";
import {NavLink} from "react-router-dom";
import Header from "../../header";
import LinkToBack from "../../linkToBack";
import {useTraining, useTrainingDispatch} from "../../../state/state";
import {fillArrayWithUniqueRandomNumbers, getRandomElementFromArray} from "../../../utils";
import type {Answer} from "../../../types";
import styles from './TrainerSelectResultPage.module.scss';

export default function TrainerSelectResultPage(): React.JSX.Element {
	const {
		answers,
		multiplierList,
		remainingMultiplierList,
		subjectOfRepetition} = useTraining();
	const dispatch: Dispatch<any> = useTrainingDispatch();

	const leftSide: React.JSX.Element = (
		<LinkToBack
			to={`/multiplication-table/${subjectOfRepetition}`}
			alt='link to multiplication table' />
	);
	const title: React.JSX.Element = <h1>Выбери ответ</h1>

	function isAnswerTrue(answer: Answer) {
		return answer.multiplier * subjectOfRepetition === answer.result;
	}
	function isAnswerFalse(answer: Answer) {
		return answer.multiplier * subjectOfRepetition !== answer.result;
	}
	const correctAnswerCount = () => {
		const newArr = answers.filter(isAnswerTrue)
		return newArr.length
	}
	const wrongAnswerCount = () => {
		const newArr = answers.filter(isAnswerFalse)
		return newArr.length
	}

	// let correctAnswerCount: number = 0;
	// let wrongAnswerCount: number = 0;
	// if(answers.length) {
	// 	answers.forEach(({multiplier, result} ): void => {
	// 		if(subjectOfRepetition * multiplier === result){
	// 			correctAnswerCount++
	// 		} else {
	// 			wrongAnswerCount++
	// 		}
	// 	})
	// }

	if(!remainingMultiplierList.length) {
		return (
			<>
				<Header
					leftSide={leftSide}
					title={title} />
				<main>
					<article className={styles.content}>
						<div className={styles.counter}>
							<div className={styles.count}>
								{`${correctAnswerCount()} / ${wrongAnswerCount()}`}
							</div>
						</div>
						<NavLink to='summary'>
							Посмотреть результаты
						</NavLink>
					</article>
				</main>
			</>
		)
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

		secondMultiplier = getRandomElementFromArray(remainingMultiplierList);
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
								subjectOfRepetition * version)}>
							{subjectOfRepetition * version}
						</button>
					</li>
				))
			}
		</ul>
	);

	return (
		<>
			<Header
				leftSide={leftSide}
				title={title}/>
			<main>
				<article className={styles.content}>
					<header className={styles.header}>
						<div className={styles.correctCount}>
							{`верно: ${correctAnswerCount()}`}
						</div>
						<div className={styles.count}>
							{`${answers.length} / ${multiplierList.length}`}
						</div>
						<div className={styles.wrongCount}>
							{`не верно: ${wrongAnswerCount()}`}
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
			</main>
		</>
	)
}