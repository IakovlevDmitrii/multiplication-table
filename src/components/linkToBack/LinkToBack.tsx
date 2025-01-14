import React from "react";
import {NavLink} from "react-router-dom";
import arrowToLeft from '../../img/arrow-to-left/arrow-to-left_color.png';
import type {LinkToBackType} from "./LinkToBackType";
import styles from './LinkToBack.module.scss';

export default function LinkToBack({to, alt, onClick}: LinkToBackType): React.JSX.Element {
	if(onClick) {
		return (
			<NavLink to={to} className={styles.link} onClick={() => onClick()}>
				<img src={arrowToLeft} alt={alt} />
			</NavLink>
		)
	}

	return (
		<NavLink to={to} className={styles.link}>
			<img src={arrowToLeft} alt={alt} />
		</NavLink>
	)
}