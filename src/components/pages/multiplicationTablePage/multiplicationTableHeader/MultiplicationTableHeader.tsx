import { FC } from "react";
import { NavLink } from "react-router-dom";
import HeaderLayout from "../../../headerLayout";
import arrowToLeft from "../../../../img/arrow-to-left/arrow-to-left_color.png";
import styles from "./MultiplicationTableHeader.module.scss";

interface MultiplicationTableHeaderProps {
	subjectOfRepetition: number;
}

const MultiplicationTableHeader: FC<MultiplicationTableHeaderProps> = (
	{ subjectOfRepetition }) => {

	return (
		<HeaderLayout
			leftSide={
				<NavLink
					to='/select-multiplier'
					className={styles.link}
				>
					<img src={arrowToLeft} alt='link to select a multiplier' />
				</NavLink>
			}
			title={
				<h1>{`Повтори умножение на ${subjectOfRepetition}`}</h1>
			}
		/>
	)
};

export default MultiplicationTableHeader;