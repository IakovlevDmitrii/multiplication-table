import { JSX, FC } from "react";
import HeaderLayout from "../../../headerLayout";
import LinkBack from "../../../linkBack";

interface SelectResultHeaderProps {
	subjectOfRepetition: number;
	handleClick: () => void;
	title: JSX.Element;
}

const SelectResultHeader: FC<SelectResultHeaderProps> = (
	{
		subjectOfRepetition,
		handleClick,
		title,
	}) => {

	const leftSide: JSX.Element = (
		<LinkBack
			to={`/multiplication-table/${subjectOfRepetition}`}
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

export default SelectResultHeader;