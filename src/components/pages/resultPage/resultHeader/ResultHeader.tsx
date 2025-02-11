import { JSX, FC } from "react";
import HeaderLayout from "../../../headerLayout";
import LinkBack from "../../../linkBack";

interface ResultHeaderProps {
	handleClick: () => void,
	title: JSX.Element,
}

const ResultHeader: FC<ResultHeaderProps> = (
	{ handleClick, title }) => {
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
			title={title}
		/>
	)
};

export default ResultHeader;
