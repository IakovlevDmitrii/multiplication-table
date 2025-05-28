import { FC, JSX } from 'react';
import { useLanguage, useSolutions } from "../../features/hooks";
import { getMultiplicationResultCounter } from "../../utils";
import locales from "../../features/locales";
import MATH_CONFIG from "../../utils/config";
import styles from './ResultCounter.module.scss';

const ResultCounter: FC = (): JSX.Element => {
	const { currentLanguage } = useLanguage();
	const locale = locales[currentLanguage];
	const { solutions } = useSolutions();
	const { correct, wrong }: {correct: number, wrong: number} =
		getMultiplicationResultCounter(solutions);
	const { MULTIPLIER_LIST_LENGTH: questionsTotal } = MATH_CONFIG;

	return (
		<div className={styles._}>
			<div className={styles.counter}>
				{`${correct + wrong} / ${questionsTotal}`}
			</div>
			<div className={styles.answers}>
				<div className={styles.correct}>
					{`${locale.correct}: ${correct}`}
				</div>
				<div className={styles.wrong}>
					{`${locale.wrong}: ${wrong}`}
				</div>
			</div>
		</div>
	)
};

export default ResultCounter;