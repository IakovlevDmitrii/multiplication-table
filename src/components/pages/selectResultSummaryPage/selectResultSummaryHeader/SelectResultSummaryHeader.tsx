import { JSX } from "react";
import { NavLink } from "react-router-dom";
import HeaderLayout from "../../../headerLayout";
import arrowToLeft from '../../../../img/arrow-to-left/arrow-to-left_color.png';
import styles from './SelectResultSummaryHeader.module.scss';

const SelectResultSummaryHeader = (): JSX.Element => {
	const leftSide: JSX.Element = (
		<NavLink
			to={`/select-result`}
			className={styles.link}
		>
			<img src={arrowToLeft} alt='link to multiplication table' />
		</NavLink>
	);

	return (
		<HeaderLayout
			leftSide={leftSide}
			title={<h1>Результат</h1>}
		/>
	)
};

export default SelectResultSummaryHeader;
