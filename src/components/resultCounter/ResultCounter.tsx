import { JSX } from 'react';
import { useAppSelector } from "../../features/hooks";
import { selectUi } from "../../store/uiSlice";
import { selectSolutions } from "../../store/solutionsSlice";
import { selectEquations } from "../../store/equationsSlice";
import { getMultiplicationResultCounter } from "../../utils";
import contentTexts from "../../features/contentTexts";
import styles from './ResultCounter.module.scss';

const ResultCounter = (): JSX.Element => {
	const { lang } = useAppSelector(selectUi);
	const solutions = useAppSelector(selectSolutions);
	const { multiplication } = useAppSelector(selectEquations);
	const resultCounter = getMultiplicationResultCounter(solutions.multiplication);
	const correct = resultCounter.correct;
	const wrong = resultCounter.wrong;
	const { multiplierList } = multiplication;
	const questionsTotal = multiplierList.length;

	return (
		<div className={styles._}>
			<div className={styles.counter}>
				{`${correct + wrong} / ${questionsTotal}`}
			</div>
			<div className={styles.answers}>
				<div className={styles.correct}>
					{`${contentTexts.selectResultPage.correct[lang]}: ${correct}`}
				</div>
				<div className={styles.wrong}>
					{`${contentTexts.selectResultPage.wrong[lang]}: ${wrong}`}
				</div>
			</div>
		</div>
	)
};

export default ResultCounter;