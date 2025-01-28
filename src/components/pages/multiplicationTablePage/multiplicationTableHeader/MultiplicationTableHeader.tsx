import { JSX } from "react";
import HeaderLayout from "../../../headerLayout";
import LinkBack from "../../../linkBack";

const MultiplicationTableHeader  = (): JSX.Element => (
	<HeaderLayout
		leftSide={
			<LinkBack
				to='/select-multiplier'
				alt='link to select a multiplier'
			/>
		}
		title={<h1>{`Remember`}</h1>}
	/>
);

export default MultiplicationTableHeader;