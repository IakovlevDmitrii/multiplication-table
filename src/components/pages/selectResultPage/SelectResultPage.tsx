import React, { Dispatch } from "react";
import PageLayout from "../../pageLayout";
import SelectResultHeader from "./selectResultHeader";
import SelectResultContentHeader from "./selectResultContent/selectResultContentHeader";
import SelectResultContent from "./selectResultContent";
import type { Answer } from "../../../types";
import { fillArrayWithUniqueRandomNumbers, getRandomElementFromArray } from "../../../utils";
import { useTraining, useTrainingDispatch } from "../../../state/state";

const SelectResultPage: () => React.JSX.Element = (): React.JSX.Element => {
	const {
		subjectOfRepetition,
		multiplierList,
		answers,
		remainingMultiplierList,
	} = useTraining();

	const dispatch: Dispatch<any> = useTrainingDispatch();
	const isTrainingFinished = !remainingMultiplierList.length;
	let secondMultiplier: number = getRandomElementFromArray(remainingMultiplierList);
	const versionArray: number[] = fillArrayWithUniqueRandomNumbers(4, 2, 9, secondMultiplier);

	const handleLinkToBack = ()=> {
		dispatch({
			type: 'changeSubjectOfRepetition',
			payload: {
				subjectOfRepetition,
			},
		})
	};

	const resultCounter = (function () {
		const results = {correct: 0, wrong: 0};

		answers.forEach(({multiplier, result}: Answer): void => {
			(multiplier * subjectOfRepetition === result) ?
				results.correct++ :
				results.wrong++
		})

		return results
	})();

	function handleAnswer(multiplier: number, result: number): void {
		dispatch({
			type: 'answer',
			payload: {
				multiplier,
				result,
			},
		});

		secondMultiplier = getRandomElementFromArray(remainingMultiplierList);
	}

	return (
		<PageLayout
			header={
				<SelectResultHeader
					isTrainingFinished={isTrainingFinished}
					subjectOfRepetition={subjectOfRepetition}
					handleClick={handleLinkToBack}
				/>
			}
			content={
				<article>
					<SelectResultContentHeader
						questionsTotal={multiplierList.length}
						correct={resultCounter.correct}
						wrong={resultCounter.wrong}
					/>
					<SelectResultContent
						isTrainingFinished={isTrainingFinished}
						subjectOfRepetition={subjectOfRepetition}
						secondMultiplier={secondMultiplier}
						versionArray={versionArray}
						handleClick={handleAnswer}
					/>
				</article>
			}
		/>
	)
};

export default SelectResultPage;
