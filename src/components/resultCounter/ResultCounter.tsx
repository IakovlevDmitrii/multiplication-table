import { FC } from 'react';
import styles from './ResultCounter.module.scss';

interface ResultCounterProps {
	questionsTotal: number;
	correct: number;
	wrong: number;
}

const ResultCounter: FC<ResultCounterProps> = (
	{ questionsTotal, correct, wrong }) => (
	<div className={styles._}>
		<div className={styles.counter}>
			{`${correct + wrong} / ${questionsTotal}`}
		</div>
		<div className={styles.answers}>
			<div>
				{`верно: ${correct}`}
			</div>
			<div>
				{`не верно: ${wrong}`}
			</div>
		</div>
	</div>
);

export default ResultCounter;