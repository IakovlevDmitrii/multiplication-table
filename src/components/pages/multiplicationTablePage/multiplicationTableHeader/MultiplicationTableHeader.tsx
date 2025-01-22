import { JSX } from "react";
import { NavLink } from "react-router-dom";
import HeaderLayout from "../../../headerLayout";
import arrowToLeft from "../../../../img/arrow-to-left/arrow-to-left_color.png";
import styles from "./MultiplicationTableHeader.module.scss";

const MultiplicationTableHeader  = (): JSX.Element => (
	<HeaderLayout
		leftSide={
			<NavLink to='/select-multiplier' className={styles.link}>
				<img src={arrowToLeft} alt='link to select a multiplier' />
			</NavLink>
		}
		title={<h1>{`Запоминай`}</h1>}
	/>
);

export default MultiplicationTableHeader;