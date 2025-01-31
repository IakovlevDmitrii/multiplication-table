import { JSX, useRef } from 'react';
import PageLayout from "../../pageLayout";
import MultiplicationTableHeader from "./multiplicationTableHeader";
import MultiplicationTableContent from "./multiplicationContent";
import { useAppSelector } from "../../../features/hooks";
import { selectEquations } from "../../../store/equationsSlice";
import { getMultiplicationSolutionsList } from "../../../utils";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const MultiplicationTablePage = (): JSX.Element => {
	const { multiplication } = useAppSelector(selectEquations);
	const { currentSubjectOfRepetition, multiplierList } = multiplication;

	const solutionsList = getMultiplicationSolutionsList(
		currentSubjectOfRepetition, multiplierList);
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
			header={<MultiplicationTableHeader />}
			content={
				<MultiplicationTableContent
					subjectOfRepetition={currentSubjectOfRepetition}
					solutionsList={solutionsList}
				/>
			}
			myRef={multiplicationTablePageRef}
		/>
	)
};

export default MultiplicationTablePage;