import { JSX, useRef } from 'react';
import PageLayout from "../../pageLayout";
import MultiplicationTableHeader from "./multiplicationTableHeader";
import MultiplicationTableContent from "./multiplicationContent";
import type { Answer } from "../../../types";
import { useTraining } from "../../../state/state";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const MultiplicationTablePage = (): JSX.Element => {
	const {
		multiplierList,
		subjectOfRepetition,
	} = useTraining();

	const getExampleList = (): Answer[] => {
		const list: Answer[] = [];
		multiplierList.forEach(multiplier => {
			list.push({
				subjectOfRepetition,
				secondMultiplier: multiplier,
				result: subjectOfRepetition * multiplier,
			})
		})

		return list;
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
		<div ref={multiplicationTablePageRef}>
			<PageLayout
				header={<MultiplicationTableHeader />}
				content={
					<MultiplicationTableContent
						subjectOfRepetition={subjectOfRepetition}
						exampleList={getExampleList()}
					/>
				}
			/>
		</div>
	)
};

export default MultiplicationTablePage;