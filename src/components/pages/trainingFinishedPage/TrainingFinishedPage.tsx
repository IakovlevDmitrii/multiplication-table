import { JSX, useCallback } from "react";
import PageLayout from "../../pageLayout";
import TrainingFinishedContent from "./trainingFinishedContent";
import TrainingFinishedHeader from "./trainingFinishedHeader";
import { useAppSelector, useAppDispatch } from "../../../features/hooks";
import { selectUi } from "../../../store/uiSlice";
import { deleteMultiplicationSolution } from "../../../store/solutionsSlice";
import { selectEquations } from "../../../store/equationsSlice";
import contentTexts from "../../../features/contentTexts";

const TrainingFinishedPage = (): JSX.Element => {
	const { lang } = useAppSelector(selectUi);
	const equations = useAppSelector(selectEquations);
	const dispatch = useAppDispatch();

	const handleLinkToBack = useCallback(() => {
		dispatch(deleteMultiplicationSolution())
	}, [dispatch]);

	const title = (
		<h1>
			{contentTexts.trainingFinishedPage.title[lang]}
		</h1>
	);

	return (
		<PageLayout
			header={
				<TrainingFinishedHeader
					subjectOfRepetition={equations.multiplication.currentSubjectOfRepetition}
					handleClick={handleLinkToBack}
					title={title}
				/>
			}
			content={
				<TrainingFinishedContent
					answersLink={
						<>{contentTexts.trainingFinishedPage.answersLink[lang]}</>
					}
				/>
			}
		/>
	)
};

export default TrainingFinishedPage;
