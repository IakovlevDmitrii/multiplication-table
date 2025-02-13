import { JSX, useRef } from 'react';
import PageLayout from "../../pageLayout";
import MultiplicationTableHeader from "./multiplicationTableHeader";
import MultiplicationTableContent from "./multiplicationContent";
import { useAppSelector } from "../../../features/hooks";
import { selectUi } from "../../../store/uiSlice";
import { selectEquations } from "../../../store/equationsSlice";
import { getMultiplicationSolutionsList } from "../../../utils";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import contentTexts from "../../../features/contentTexts";

gsap.registerPlugin(useGSAP);

const MultiplicationTablePage = (): JSX.Element => {
	const { lang } = useAppSelector(selectUi);
	const { multiplication } = useAppSelector(selectEquations);
	const title = (
		<h1>
			{contentTexts.multiplicationTablePage.title[lang]}
		</h1>
	);
	const { currentSubjectOfRepetition, multiplierList } = multiplication;

	const solutionsList = getMultiplicationSolutionsList(
		currentSubjectOfRepetition, multiplierList);
	const checkYourself = (
		<>
			{contentTexts.multiplicationTablePage.checkYourself[lang]}
		</>
	);
	const multiplicationTablePageRef = useRef<HTMLDivElement>(null);

	useGSAP(() => {
		gsap.from('h1', {
			opacity: 0,
		});
		gsap.from("li", {
			opacity: 0,
			stagger: 0.1
		});
		gsap.from('a', {
			opacity: 0,
		});
	}, { scope: multiplicationTablePageRef });

	return (
		<PageLayout
			header={
				<MultiplicationTableHeader title={title} />
			}
			content={
				<MultiplicationTableContent
					subjectOfRepetition={currentSubjectOfRepetition}
					solutionsList={solutionsList}
					checkYourself={checkYourself}
				/>
			}
			myRef={multiplicationTablePageRef}
		/>
	)
};

export default MultiplicationTablePage;