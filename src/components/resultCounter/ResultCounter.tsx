import { FC, JSX } from 'react';
import { useAppSelector, useSettings } from "../../features/hooks";
import { selectSolutions } from "../../store/solutionsSlice";
import { getMultiplicationResultCounter } from "../../utils";
import locales from "../../features/locales";
import type { SolutionsState } from "../../store/solutionsSlice";
import styles from './ResultCounter.module.scss';

interface ResultCounterProps {
	questionsTotal: number;
}

const ResultCounter: FC<ResultCounterProps> = (
	{ questionsTotal }: ResultCounterProps): JSX.Element => {
	const { language } = useSettings();
	const solutions: SolutionsState = useAppSelector(selectSolutions);
	const resultCounter: {correct: number, wrong: number} = getMultiplicationResultCounter(solutions.multiplication);
	const correct: number = resultCounter.correct;
	const wrong: number = resultCounter.wrong;

	return (
		<div className={styles._}>
			<div className={styles.counter}>
				{`${correct + wrong} / ${questionsTotal}`}
			</div>
			<div className={styles.answers}>
				<div className={styles.correct}>
					{`${locales[language].correct}: ${correct}`}
				</div>
				<div className={styles.wrong}>
					{`${locales[language].wrong}: ${wrong}`}
				</div>
			</div>
		</div>
	)
};

export default ResultCounter;