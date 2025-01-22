import { JSX, useRef } from "react";
import PageLayout from "../../pageLayout";
import ResultHeader from "./resultHeader";
import ResultContent from "./resultContent";
import { useTraining } from "../../../state/state";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const ResultPage = (): JSX.Element => {
	const { answers } = useTraining();

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
		<div ref={selectResultSummaryRef}>
			<PageLayout
				header={<ResultHeader />}
				content={<ResultContent exampleList={answers}/>}
			/>
		</div>
	)
};

export default ResultPage;
