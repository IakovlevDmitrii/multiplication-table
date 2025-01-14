import React from 'react';
import { NavLink } from "react-router-dom";
import PageLayout from "../../pageLayout";
import Header from "../../header";
import arrowToLeft from '../../../img/arrow-to-left/arrow-to-left_color.png';
import { useTraining } from "../../../state/state";
import styles from './MultiplicationTablePage.module.scss';

const MultiplicationTablePage: () => React.JSX.Element = (): React.JSX.Element => {
	const {
		multiplierList,
		subjectOfRepetition,
	} = useTraining();

	const leftSide: React.JSX.Element = (
		<NavLink
			to='/select-multiplier'
			className={styles.link}
		>
			<img src={arrowToLeft} alt='link to select a multiplier' />
		</NavLink>
	);

	const title: React.JSX.Element = (
		<h1>{`Повтори умножение на ${subjectOfRepetition}`}</h1>
	);

	const header: React.JSX.Element = (
		<Header leftSide={leftSide} title={title} />
	);

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

	const content: React.JSX.Element = (
		<article className={styles.content}>
			{multiplicationTable}
			<div className={styles.links}>
				<NavLink
					className={styles.trainerLink}
					to={`/trainer-select-result/${subjectOfRepetition}`}
				>
					{`Проверь умножение на ${subjectOfRepetition}`}
				</NavLink>
			</div>
		</article>
	)

	return <PageLayout header={header} content={content}/>
};

export default MultiplicationTablePage;