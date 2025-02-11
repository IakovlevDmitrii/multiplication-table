import { FC, JSX } from "react";
import HeaderLayout from "../../../headerLayout";
import LinkBack from "../../../linkBack";

interface MultiplicationTableHeaderProps {
	title: JSX.Element;
}

const MultiplicationTableHeader: FC<MultiplicationTableHeaderProps>  = (
	{ title }): JSX.Element => (
	<HeaderLayout
		leftSide={
			<LinkBack
				to='/select-multiplier'
				alt='link to select a multiplier'
			/>
		}
		title={title}
	/>
);

export default MultiplicationTableHeader;