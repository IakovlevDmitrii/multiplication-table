import { FC, JSX } from "react";
import HeaderLayout from "../../../headerLayout";
import LinkBack from "../../../linkBack";

interface TrainingFinishedHeaderProps {
	subjectOfRepetition: number;
	handleClick: () => void;
	title: JSX.Element,
}

const TrainingFinishedHeader: FC<TrainingFinishedHeaderProps> = (
	{
		subjectOfRepetition,
		handleClick,
		title,
	}
) => {
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

export default TrainingFinishedHeader;
