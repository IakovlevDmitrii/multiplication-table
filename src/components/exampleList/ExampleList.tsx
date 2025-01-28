import { FC } from "react";
import type { Equation } from "../../types";
import classNames from "classnames";
import styles from './ExampleList.module.scss';

interface ExampleListProps {
	exampleList: Equation[],
	isDefault: boolean,
}

const ExampleList: FC<ExampleListProps> = (
	{ exampleList, isDefault }) => {

	return (
		<ol className={styles._}>
			{
				exampleList.map((
					{ subjectOfRepetition, secondMultiplier, result }) => {

					const isSuccess = subjectOfRepetition * secondMultiplier === result;

					return (
						<li key={secondMultiplier}>
							<div className={styles.example}>
								<div className={styles.condition}>
									{`${subjectOfRepetition} * ${secondMultiplier} = `}
								</div>
								<div className={classNames(styles.result, {
									[styles.correct]: !isDefault && isSuccess,
									[styles.wrong]: !isDefault && !isSuccess,
								}) }>
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
