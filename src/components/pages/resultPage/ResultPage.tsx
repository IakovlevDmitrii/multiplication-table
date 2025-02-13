import {JSX, useRef, useCallback } from "react";
import PageLayout from "../../pageLayout";
import ResultHeader from "./resultHeader";
import ResultContent from "./resultContent";
import { useAppSelector, useAppDispatch } from "../../../features/hooks";
import { selectUi } from "../../../store/uiSlice";
import { changeSubjectOfRepetition_multiplication } from "../../../store/equationsSlice";
import { selectSolutions, deleteMultiplicationSolution } from "../../../store/solutionsSlice";
import contentTexts from "../../../features/contentTexts";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const ResultPage = (): JSX.Element => {
	const solutions = useAppSelector(selectSolutions);
	const { lang } = useAppSelector(selectUi);
	const dispatch = useAppDispatch();
	const handleLinkToBack = useCallback(() => {
		dispatch(deleteMultiplicationSolution());
		dispatch(changeSubjectOfRepetition_multiplication(2))
	}, [dispatch]);
	const title = (
		<h1>{contentTexts.resultPage.title[lang]}</h1>
	);

	const selectResultSummaryRef = useRef<HTMLDivElement>(null);

	useGSAP(() => {
		gsap.from('h1', {
			opacity: 0,
		});
		gsap.from("li", {
			opacity: 0,
			stagger: 0.1
		});
	}, { scope: selectResultSummaryRef });

	return (
		<PageLayout
			header={
				<ResultHeader
					handleClick={handleLinkToBack}
					title={title}
				/>
			}
			content={<ResultContent solutionsList={solutions.multiplication} />}
			myRef={selectResultSummaryRef}
		/>
	)
};

export default ResultPage;
