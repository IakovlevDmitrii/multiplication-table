import React from 'react';
import {NavLink} from "react-router-dom";
import Header from "../../header";
import LinkToBack from "../../linkToBack";
import MultiplicationTableList from './multiplicationTableList';
import {useTraining} from "../../../state/state";
import type {TrainingContextType} from "../../../types";
import styles from './MultiplicationTanlePage.module.scss';

export default function MultiplicationTablePage(): React.JSX.Element {
	const training: TrainingContextType = useTraining();
	const {subjectOfRepetition} = training;

	const leftSide: React.JSX.Element = <LinkToBack
		to='/select-multiplier'
		alt='link to select a multiplier' />
	const title: React.JSX.Element = <h1>{`Повтори умножение на ${subjectOfRepetition}`}</h1>

	return (
		<>
			<Header leftSide={leftSide} title={title} />
			<MultiplicationTableList />
			<footer className={styles.footer}>
				<NavLink to={`/trainer-select-result/${subjectOfRepetition}`}>
					{`Проверь умножение на ${subjectOfRepetition}`}
				</NavLink>
			</footer>
		</>
	)
}