import { JSX, useCallback } from "react";
import TrainingFinishedPage from "../trainingFinishedPage";
import PageLayout from "../../pageLayout";
import SelectResultHeader from "./selectResultHeader";
import SelectResultContent from "./selectResultContent";
import { useAppDispatch, useAppSelector } from "../../../features/hooks";
import { selectUi } from "../../../store/uiSlice";
import {
	multiplicationSolution,
	deleteMultiplicationSolution,
} from "../../../store/solutionsSlice";
import {
	selectEquations,
	changeSubjectOfRepetition_multiplication,
	decreaseRemainingMultiplierList,
} from "../../../store/equationsSlice";
import {
	fillArrayWithUniqueRandomNumbers,
	getRandomElementFromArray,
} from "../../../utils";
import contentTexts from "../../../features/contentTexts";

const SelectResultPage = (): JSX.Element => {
	const { lang } = useAppSelector(selectUi);
	const { multiplication } = useAppSelector(selectEquations);
	const {
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
			deleteMultiplicationSolution());
	}, [dispatch, currentSubjectOfRepetition]);

	const title = (
		<h1>
			{contentTexts.selectResultPage.header[lang]}
		</h1>
	);

	const onVersionClick = useCallback((version: number): void => {
		dispatch(multiplicationSolution({
			subjectOfRepetition: currentSubjectOfRepetition,
			secondMultiplier,
			product: version,
		}));
		dispatch(decreaseRemainingMultiplierList(secondMultiplier));
	}, [dispatch,currentSubjectOfRepetition, secondMultiplier]);

	if(isTrainingFinished) {
		return <TrainingFinishedPage/>
	}

	return (
		<PageLayout
			header={
				<SelectResultHeader
					subjectOfRepetition={currentSubjectOfRepetition}
					handleClick={handleLinkToBack}
					title={title}
				/>
			}
			content={
				<SelectResultContent
					subjectOfRepetition={currentSubjectOfRepetition}
					secondMultiplier={secondMultiplier}
					versionArray={versionArray}
					onVersionClick={onVersionClick}
				/>
			}
		/>
	)
};

export default SelectResultPage;
