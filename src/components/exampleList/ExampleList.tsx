import { FC } from "react";
import type { Answer } from "../../types";
import styles from './ExampleList.module.scss';

interface ExampleListProps {
	exampleList: Answer[]
}

const ExampleList: FC<ExampleListProps> = (
	{ exampleList }) => {

	return (
		<ol className={styles._}>
			{
				exampleList.map((
					{ subjectOfRepetition, secondMultiplier, result }) => {

					const isCorrect = subjectOfRepetition * secondMultiplier === result;

					return (
						<li key={secondMultiplier}>
							<div className={styles.example}>
								<div className={styles.condition}>
									{`${subjectOfRepetition} * ${secondMultiplier} = `}
								</div>
								<div className={isCorrect ? styles.result_correct : styles.result_wrong}>
									{`${result}`}
								</div>
							</div>
						</li>
					)
				})
			}
		</ol>
	)
};

export default ExampleList;
