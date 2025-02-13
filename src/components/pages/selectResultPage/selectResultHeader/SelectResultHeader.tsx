import { JSX, FC } from "react";
import HeaderLayout from "../../../headerLayout";
import LinkBack from "../../../linkBack";
import { useAppSelector } from "../../../../features/hooks";
import { selectUi } from "../../../../store/uiSlice";
import contentTexts from "../../../../features/contentTexts";

interface SelectResultHeaderProps {
	subjectOfRepetition: number;
	handleClick: () => void;
}

const SelectResultHeader: FC<SelectResultHeaderProps> = (
	{
		subjectOfRepetition,
		handleClick,
	}) => {
	const { lang } = useAppSelector(selectUi);
	const leftSide: JSX.Element = (
		<LinkBack
			to={`/multiplication-table/${subjectOfRepetition}`}
			alt='link to multiplication table'
			handleClick={() => handleClick()}
		/>
	);
	const titleText = contentTexts.selectResultPage.title[lang];
	const title = <h1>{titleText}</h1>

	return (
		<HeaderLayout
			leftSide={leftSide}
			title={title}
		/>
	)
};

export default SelectResultHeader;