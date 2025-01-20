import { JSX, FC } from "react";
import { NavLink } from "react-router-dom";
import HeaderLayout from "../../../headerLayout";
import arrowToLeft from "../../../../img/arrow-to-left/arrow-to-left_color.png";
import styles from './SelectResultHeader.module.scss';

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
		<NavLink
			to={`/multiplication-table/${subjectOfRepetition}`}
			className={styles.link}
			onClick={() => handleClick()}
		>
			<img src={arrowToLeft} alt='link to multiplication table' />
		</NavLink>
	);

	const title: JSX.Element = isTrainingFinished ?
		<h1>Твой результат</h1>
		:
		<h1>Выбери ответ</h1>

	return (
		<HeaderLayout leftSide={leftSide} title={title} />
	)
};

export default SelectResultHeader;