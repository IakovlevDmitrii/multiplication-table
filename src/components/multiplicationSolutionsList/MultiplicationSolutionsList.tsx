import { FC } from "react";
import type { Solution_Multiplication } from "../../types";
import classNames from "classnames";
import styles from './MultiplicationSolutionsList.module.scss';

interface MultiplicationSolutionsListProps {
	solutionsList: Solution_Multiplication[],
	isDefault: boolean,
}

const MultiplicationSolutionsList: FC<MultiplicationSolutionsListProps> = (
	{ solutionsList, isDefault }) => {

	return (
		<ol className={styles._}>
			{
				solutionsList.map((
					{ subjectOfRepetition, secondMultiplier, product }) => {
					const isSuccess = subjectOfRepetition * secondMultiplier === product;

					return (
						<li key={secondMultiplier}>
							<div className={styles.example}>
								<div className={styles.condition}>
									{`${subjectOfRepetition} * ${secondMultiplier} = `}
								</div>
								<div className={classNames(styles.product, {
									[styles.correct]: !isDefault && isSuccess,
									[styles.wrong]: !isDefault && !isSuccess,
								})}>
									{`${product}`}
								</div>
							</div>
						</li>
					)
				})
			}
		</ol>
	)
};

export default MultiplicationSolutionsList;
