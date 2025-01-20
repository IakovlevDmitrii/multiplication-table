import { JSX } from 'react';
import PageLayout from "../../pageLayout";
import MultiplicationTableHeader from "./multiplicationTableHeader";
import MultiplicationTableContent from "./multiplicationContent";
import { useTraining } from "../../../state/state";

const MultiplicationTablePage = (): JSX.Element => {
	const {
		multiplierList,
		subjectOfRepetition,
	} = useTraining();

	return (
		<PageLayout
			header={
				<MultiplicationTableHeader subjectOfRepetition={subjectOfRepetition} />
			}
			content={
				<MultiplicationTableContent
					subjectOfRepetition={subjectOfRepetition}
					list={multiplierList}
				/>
			}
		/>
	)
};

export default MultiplicationTablePage;