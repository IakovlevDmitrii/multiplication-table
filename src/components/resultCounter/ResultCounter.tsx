import { FC, JSX } from "react";
import { useAppSelector, useLanguage } from "../../hooks";
import { selectSolutions } from "../../store/equations/equationsSelectors";
import { getMultiplicationResultCounter } from "../../utils";
import locales from "../../features/locales";
import MATH_CONFIG from "../../utils/math/math-config";
import type { Solution } from "../../types";
import styles from "./ResultCounter.module.scss";

const ResultCounter: FC = (): JSX.Element => {
	const { currentLanguage } = useLanguage();
	const locale = locales[currentLanguage];
	const solutions: [] | Solution[] = useAppSelector(selectSolutions);
	const { correct, wrong }: {correct: number, wrong: number} =
		getMultiplicationResultCounter(solutions);
	const { MULTIPLIER_LIST_LENGTH: questionsTotal } = MATH_CONFIG;

	return (
		<div className={styles._}>
			<div className={styles.answers}>
				<span>
					{`${locale.correct}: ${correct}`}
				</span>
				<span>
					{`${locale.incorrect}: ${wrong}`}
				</span>
			</div>
			<div className={styles.counter}>
				<span>
					{`${correct + wrong} / ${questionsTotal}`}
				</span>
			</div>
		</div>
	)
};

export default ResultCounter;