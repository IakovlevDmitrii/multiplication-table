import { FC } from "react";
import HeaderLayout from "../../../headerLayout";
import LinkBack from "../../../linkBack";

interface ResultHeaderProps {
	handleClick: () => void
}

const ResultHeader: FC<ResultHeaderProps> = (
	{ handleClick }) => {
	const leftSide = (
		<LinkBack
			to='/select-result'
		 	alt='link to multiplication table'
			handleClick={() => handleClick()}
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
