import React, { FC, JSX, RefObject, useRef } from 'react';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import PageLayout from '../../pageLayout';
import Header from '../../header';
import BackLink from '../../backLink';
import MultiplicationExample from "../../multiplicationExample";
import { useAppDispatch, useAppSelector, useSettings } from "../../../features/hooks";
import { selectEquations, clearEquations_multiplication } from "../../../store/equationsSlice";
import locales from "../../../features/locales";
import type { Solution_Multiplication } from "../../../types";
import styles from "./ResultPage.module.scss";

const ResultPage: FC = (): JSX.Element => {
	const dispatch = useAppDispatch();

	const leftTab: JSX.Element = (
		<BackLink
			to='/select-multiplier'
			alt='link to multiplication table'
			onClick={() => {
				dispatch(clearEquations_multiplication());
			}}
		/>
	);

	const { language } = useSettings();
	const headerTitle: string = locales[language].resultTitle;

	const animationRef: RefObject<HTMLOListElement | null> = useRef<HTMLOListElement>(null);

	useGSAP(() => {
		gsap.from("li", {
			scale: 0,
			opacity: 0,
			stagger: 0.05
		});
	}, { scope: animationRef });

	const { multiplication } = useAppSelector(selectEquations);
	const solutionsList: Solution_Multiplication[] | [] = multiplication.solutions;
	const mainContent: JSX.Element = (
		<article className={styles._}>
			<ol ref={animationRef}>
				{solutionsList.map(({
					subjectOfRepetition,
					secondMultiplier,
					product,
				}: Solution_Multiplication): JSX.Element => (
					<li key={secondMultiplier}>
						<MultiplicationExample
							firstMultiplier={subjectOfRepetition}
							secondMultiplier={secondMultiplier}
							hideResult={false}
							userAnswer={product}
						/>
					</li>
				))}
			</ol>
		</article>
	);

	return (
		<PageLayout
			header={<Header title={headerTitle} leftTab={leftTab} />}
			mainContent={mainContent}
		/>
	);
};

export default ResultPage;
