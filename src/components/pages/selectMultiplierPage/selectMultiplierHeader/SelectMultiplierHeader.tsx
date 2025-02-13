import { FC } from 'react';
import HeaderLayout from "../../../headerLayout";
import { useAppSelector } from "../../../../features/hooks";
import { selectUi } from "../../../../store/uiSlice";
import contentTexts from "../../../../features/contentTexts";

const SelectMultiplierHeader: FC = () => {
	const { lang } = useAppSelector(selectUi);
	const titleText = contentTexts.selectMultiplierPage.title[lang];
	const title = <h1>{titleText}</h1>

	return <HeaderLayout title={title} />
};

export default SelectMultiplierHeader;
