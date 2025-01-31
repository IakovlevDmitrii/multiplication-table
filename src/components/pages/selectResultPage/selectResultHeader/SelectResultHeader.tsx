import { JSX, FC } from "react";
import HeaderLayout from "../../../headerLayout";
import LinkBack from "../../../linkBack";

interface SelectResultHeaderProps {
	isTrainingFinished: boolean;
	subjectOfRepetition: number;
	handleClick: () => void;
}

const SelectResultHeader: FC<SelectResultHeaderProps> = (
	{
		isTrainingFinished,
		subjectOfRepetition,
		handleClick,
	}) => {

	const leftSide: JSX.Element = (
		<LinkBack
			to={`/multiplication-table/${subjectOfRepetition}`}
			alt='link to multiplication table'
			handleClick={() => handleClick()}
		/>
	);

	const title: JSX.Element = (
		<h1>
			{isTrainingFinished ? 'Your result' : 'Choose a solution'}
		</h1>
	);

	return <HeaderLayout leftSide={leftSide} title={title} />
};

export default SelectResultHeader;