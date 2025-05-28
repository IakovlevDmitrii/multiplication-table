import { FC, JSX } from "react";
import Result from "./result";
import styles from "./MultiplicationExample.module.scss"

interface MultiplicationExampleProps {
	firstMultiplier: number;
	secondMultiplier: number;
	hideResult: boolean;
	correctAnswer?: number;
	userAnswer?: number;
}

const MultiplicationExample: FC<MultiplicationExampleProps> = ({
	firstMultiplier,
	secondMultiplier,
	hideResult,
	correctAnswer,
	userAnswer
}: MultiplicationExampleProps): JSX.Element => {
	const calculatedResult: number = firstMultiplier * secondMultiplier;
	const displayResult: number = userAnswer ?? correctAnswer ?? calculatedResult;
	const isUserAnswer: boolean = typeof userAnswer !== "undefined";

	return (
		<div className={styles.example}>
			<div className={styles.condition}>
				{`${firstMultiplier} x ${secondMultiplier} =`}
			</div>
			<Result
				result={displayResult}
				isHighlighted={isUserAnswer}
				isError={isUserAnswer && displayResult !== calculatedResult}
				isHidden={hideResult}
			/>
		</div>
	)
};

export default MultiplicationExample;