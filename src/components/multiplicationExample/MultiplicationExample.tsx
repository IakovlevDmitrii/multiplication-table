import { FC, JSX } from "react";
import Result from "./result/Result";
import styles from "./MultiplicationExample.module.scss"

const MultiplicationExample: FC<{
	firstMultiplier: number;
	secondMultiplier: number;
	hideResult: boolean;
	correctAnswer?: number;
	userAnswer?: number;
}> = ({
	firstMultiplier,
	secondMultiplier,
	hideResult,
	correctAnswer,
	userAnswer
}): JSX.Element => {
	const calculatedResult: number = firstMultiplier * secondMultiplier;
	const displayResult: number = userAnswer ?? correctAnswer ?? calculatedResult;
	const isUserAnswer: boolean = typeof userAnswer !== "undefined";

	return (
		<div className={styles._}>
			<div>
				<span>
					{`${firstMultiplier} x ${secondMultiplier} =`}
				</span>
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