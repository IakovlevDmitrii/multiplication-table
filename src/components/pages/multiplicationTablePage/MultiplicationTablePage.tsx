import { JSX, useRef } from 'react';
import PageLayout from "../../pageLayout";
import MultiplicationTableHeader from "./multiplicationTableHeader";
import MultiplicationTableContent from "./multiplicationContent";
import type { Equation } from "../../../types";
import { useTraining } from "../../../state/state";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const MultiplicationTablePage = (): JSX.Element => {
	const {
		multiplierList,
		subjectOfRepetition,
	} = useTraining();

	const getEquationList = (): Equation[] => {
		const equationsList: Equation[] = [];

		multiplierList.forEach(multiplier => {
			equationsList.push({
				subjectOfRepetition,
				secondMultiplier: multiplier,
				result: subjectOfRepetition * multiplier,
			})
		})

		return equationsList;
	};

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
					subjectOfRepetition={subjectOfRepetition}
					exampleList={getEquationList()}
				/>
			}
			myRef={multiplicationTablePageRef}
		/>
	)
};

export default MultiplicationTablePage;