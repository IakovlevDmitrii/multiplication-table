import { JSX } from "react";
import HeaderLayout from "../../../headerLayout";
import LinkBack from "../../../linkBack";

const ResultHeader = (): JSX.Element => {
	const leftSide: JSX.Element = (
		<LinkBack
			to='/select-result'
		 	alt='link to multiplication table'
		/>
	);

	return (
		<HeaderLayout
			leftSide={leftSide}
			title={<h1>Your answers</h1>}
		/>
	)
};

export default ResultHeader;
