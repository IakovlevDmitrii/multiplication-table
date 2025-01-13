import React from "react";
import Header from "../../header";
import LinkToBack from "../../linkToBack";
import {useTraining} from "../../../state/state";
import type {Answer, TrainingContextType} from "../../../types";
import styles from "./TrainerSelectResultSummaryPage.module.scss";

export default function TrainerSelectResultSummaryPage(): React.JSX.Element {
	const leftSide: React.JSX.Element = (
		<LinkToBack
			to={`/trainer-select-result`}
			alt='link to multiplication table' />
	);
	const title: React.JSX.Element = <h1>Результат</h1>

	const {answers, subjectOfRepetition}: TrainingContextType = useTraining();
	const answersList: React.JSX.Element = (
		<ol className={styles.answer_list}>
			{
				answers.map(({multiplier, result}: Answer): React.JSX.Element => {
					return (
						<li key={multiplier}>
							<div className={styles.answer}>
								<div className={styles.condition}>
									{`${subjectOfRepetition} * ${multiplier} = `}
								</div>
								<div className={styles.result}>
									{`${result}`}
								</div>
							</div>
						</li>
					)
				})
			}
		</ol>
	);


	return (
		<>
			<Header leftSide={leftSide} title={title}/>
			<main>
				<article className={styles.content}>
					{answersList}
				</article>
			</main>
		</>
	)
}