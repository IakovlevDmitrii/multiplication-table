import { FC, JSX } from 'react';
import HeaderLayout from "../../../headerLayout";

interface SelectMultiplierHeaderProps {
	title: JSX.Element,
}

const SelectMultiplierHeader: FC<SelectMultiplierHeaderProps> = (
	{ title }): JSX.Element => (
	<HeaderLayout
		title={title}
	/>
);

export default SelectMultiplierHeader;
