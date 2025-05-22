import { FC, JSX } from 'react';
import { useAppSelector, useSettings } from "../../features/hooks";
import { selectEquations } from "../../store/equationsSlice";
import { getMultiplicationResultCounter } from "../../utils";
import locales from "../../features/locales";
import { MATH_CONFIG } from "../../utils/config";
import type { EquationsState } from "../../types";
import styles from './ResultCounter.module.scss';

const ResultCounter: FC = (): JSX.Element => {
	const { language } = useSettings();
	const equations: EquationsState = useAppSelector(selectEquations);
	const { correct, wrong }: {correct: number, wrong: number} =
		getMultiplicationResultCounter(equations.multiplication.solutions);
	const { MULTIPLIER_LIST_LENGTH: questionsTotal } = MATH_CONFIG.MULTIPLICATION;

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