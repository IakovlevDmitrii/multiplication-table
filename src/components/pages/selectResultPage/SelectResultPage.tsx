import { JSX, useCallback } from "react";
import PageLayout from "../../pageLayout";
import SelectResultHeader from "./selectResultHeader";
import SelectResultContent from "./selectResultContent";
import { useAppDispatch, useAppSelector } from "../../../features/hooks";
import {
	multiplicationSolution,
	deleteMultiplicationSolution,
	selectSolutions,
} from "../../../store/solutionsSlice";
import {
	selectEquations,
	changeSubjectOfRepetition_multiplication,
	decreaseRemainingMultiplierList,
} from "../../../store/equationsSlice";
import {
	fillArrayWithUniqueRandomNumbers,
	getMultiplicationResultCounter,
	getRandomElementFromArray,
} from "../../../utils";

const SelectResultPage = (): JSX.Element => {
	const solutions = useAppSelector(selectSolutions);
	const { multiplication } = useAppSelector(selectEquations);
	const {
		multiplierList,
		remainingMultiplierList,
		currentSubjectOfRepetition,
	} = multiplication;

	const dispatch = useAppDispatch();

	const isTrainingFinished = !remainingMultiplierList.length;
	const secondMultiplier: number = getRandomElementFromArray(remainingMultiplierList);
	const versionArray: number[] = fillArrayWithUniqueRandomNumbers(4, 2, 9, secondMultiplier);

	const handleLinkToBack = useCallback(()=> {
		dispatch(
			changeSubjectOfRepetition_multiplication(currentSubjectOfRepetition));
		dispatch(
			deleteMultiplicationSolution())
	}, [dispatch, currentSubjectOfRepetition]);

	const resultCounter = getMultiplicationResultCounter(
		solutions.multiplication);

	const onVersionClick = useCallback((version: number): void => {
		dispatch(multiplicationSolution({
			subjectOfRepetition: currentSubjectOfRepetition,
			secondMultiplier,
			product: version,
		}));
		dispatch(decreaseRemainingMultiplierList(secondMultiplier));
	}, [dispatch,currentSubjectOfRepetition, secondMultiplier]);

	const contentProps = {
		questionsTotal: multiplierList.length,
		correct: resultCounter.correct,
		wrong: resultCounter.wrong,
		isTrainingFinished: isTrainingFinished,
		subjectOfRepetition: currentSubjectOfRepetition,
		secondMultiplier: secondMultiplier,
		versionArray: versionArray,
		onVersionClick: onVersionClick,
	};

	return (
		<PageLayout
			header={
				<SelectResultHeader
					isTrainingFinished={isTrainingFinished}
					subjectOfRepetition={currentSubjectOfRepetition}
					handleClick={handleLinkToBack}
				/>
			}
			content={<SelectResultContent contentProps={contentProps} />}
		/>
	)
};

export default SelectResultPage;
