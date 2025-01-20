import { Dispatch, JSX } from "react";
import PageLayout from "../../pageLayout";
import SelectResultHeader from "./selectResultHeader";
import SelectResultContent from "./selectResultContent";
import type { Answer, DispatchType } from "../../../types";
import { fillArrayWithUniqueRandomNumbers, getRandomElementFromArray } from "../../../utils";
import { useTraining, useTrainingDispatch } from "../../../state/state";

const SelectResultPage = (): JSX.Element => {
	const {
		subjectOfRepetition,
		multiplierList,
		answers,
		remainingMultiplierList,
	} = useTraining();

	const dispatch: Dispatch<DispatchType> = useTrainingDispatch();
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
			if(multiplier * subjectOfRepetition === result) {
				results.correct++
			} else {
				results.wrong++
			}
		});

		return results
	})();

	function onVersionClick(multiplier: number, result: number): void {
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
				<SelectResultContent
					questionsTotal={multiplierList.length}
					correct={resultCounter.correct}
					wrong={resultCounter.wrong}
					isTrainingFinished={isTrainingFinished}
					subjectOfRepetition={subjectOfRepetition}
					secondMultiplier={secondMultiplier}
					versionArray={versionArray}
					onVersionClick={onVersionClick}
				/>
			}
		/>
	)
};

export default SelectResultPage;
