import { Dispatch, JSX, useCallback } from "react";
import PageLayout from "../../pageLayout";
import SelectResultHeader from "./selectResultHeader";
import SelectResultContent from "./selectResultContent";
import type { Equation, DispatchType } from "../../../types";
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
	const secondMultiplier: number = getRandomElementFromArray(remainingMultiplierList);
	const versionArray: number[] = fillArrayWithUniqueRandomNumbers(4, 2, 9, secondMultiplier);

	const handleLinkToBack = useCallback(()=> {
		dispatch({
			type: 'changeSubjectOfRepetition',
			payload: {
				subjectOfRepetition,
			},
		})
	},[dispatch, subjectOfRepetition]);

	const getResultCounter = () => {
		const results = {correct: 0, wrong: 0};

		answers.forEach(({ secondMultiplier, result }: Equation): void => {
			if(secondMultiplier * subjectOfRepetition === result) {
				results.correct++
			} else {
				results.wrong++
			}
		});

		return results;
	};

	const resultCounter = getResultCounter();

	const onVersionClick = useCallback((value: number): void => {
		dispatch({
			type: 'answer',
			payload: {
				subjectOfRepetition,
				secondMultiplier,
				result: value,
			},
		})
	},[dispatch,subjectOfRepetition, secondMultiplier]);

	const contentProps = {
		questionsTotal: multiplierList.length,
		correct: resultCounter.correct,
		wrong: resultCounter.wrong,
		isTrainingFinished: isTrainingFinished,
		subjectOfRepetition: subjectOfRepetition,
		secondMultiplier: secondMultiplier,
		versionArray: versionArray,
		onVersionClick: onVersionClick,
	};

	return (
		<PageLayout
			header={
				<SelectResultHeader
					isTrainingFinished={isTrainingFinished}
					subjectOfRepetition={subjectOfRepetition}
					handleClick={handleLinkToBack}
				/>
			}
			content={<SelectResultContent contentProps={contentProps} />}
		/>
	)
};

export default SelectResultPage;
