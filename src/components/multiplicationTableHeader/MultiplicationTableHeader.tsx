import React from 'react';
import { NavLink } from "react-router-dom";
import selectMultiplierLink from './img/arrow-to-left-1/arrow-to-left.png'
import styles from './MultiplicationTableHeader.module.scss';

export default function MultiplicationTableHeader({ multiplier }) {
	return (
		<header className={styles.header}>
			<div className={styles.link}>
				<NavLink to='/select-multiplier'>
					<img src={selectMultiplierLink} alt='link to select a multiplier'/>
				</NavLink>
			</div>
			<div className={styles.content}>
				{`Повторяем умножение на ${multiplier}`}
			</div>
		</header>
	)
}