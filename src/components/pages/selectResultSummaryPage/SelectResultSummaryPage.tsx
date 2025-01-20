import { JSX } from "react";
import PageLayout from "../../pageLayout";
import SelectResultSummaryHeader from "./selectResultSummaryHeader";
import SelectResultSummaryContent from "./selectResultSummaryContent";
import { useTraining } from "../../../state/state";

const SelectResultSummaryPage = (): JSX.Element => {
	const { answers, subjectOfRepetition } = useTraining();

	return <PageLayout
		header={<SelectResultSummaryHeader />}
		content={
			<SelectResultSummaryContent
				list={answers}
				subjectOfRepetition={subjectOfRepetition}
			/>
		}
	/>
};

export default SelectResultSummaryPage;
