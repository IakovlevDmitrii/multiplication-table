import React from 'react';
import { NavLink } from "react-router-dom";
import SelectMultiplierButton from "../selectMultiplierButton";
import styles from "./SelectMultiplierList.module.scss";

export default function SelectMultiplierList() {
	const multipliers = [];

	for(let num = 2; num <=9; num++) {
		multipliers.push(num);
	}

	const multiplierList = multipliers.map(item => (
		<li key={item} className={item}>
			<NavLink to={`/multiplication-table/${item}`}>
				<SelectMultiplierButton multiplier={item} />
			</NavLink>
		</li>
	))

	return (
		<div className={styles.content}>
			<ol className={styles.list}>
				{multiplierList}
			</ol>
		</div>
	)
}