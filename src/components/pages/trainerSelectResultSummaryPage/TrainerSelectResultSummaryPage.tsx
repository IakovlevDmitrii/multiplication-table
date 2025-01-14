import React from "react";
import { NavLink } from "react-router-dom";
import PageLayout from "../../pageLayout";
import Header from "../../header";
import arrowToLeft from '../../../img/arrow-to-left/arrow-to-left_color.png';
import { useTraining } from "../../../state/state";
import { type Answer } from "../../../types";
import styles from "./TrainerSelectResultSummaryPage.module.scss";

const TrainerSelectResultSummaryPage: () => React.JSX.Element = (): React.JSX.Element => {
	const leftSide: React.JSX.Element = (
		<NavLink
			to={`/trainer-select-result`}
			className={styles.link}
		>
			<img src={arrowToLeft} alt='link to multiplication table' />
		</NavLink>
	);

	const {answers, subjectOfRepetition} = useTraining();

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

	const header: React.JSX.Element = (
		<Header leftSide={leftSide} title={<h1>Результат</h1>}/>
	);

	const content: React.JSX.Element = (
		<article className={styles.content}>
			{answersList}
		</article>
	);

	return <PageLayout header={header} content={content}/>
};

export default TrainerSelectResultSummaryPage;
