import React from "react";
import SelectMultiplierHeader from "../../selectMultiplierHeader";
import SelectMultiplierList from "../../selectMultiplierList";
import styles from './SelectMultiplierPage.module.scss';

export default function SelectMultiplierPage() {
	return (
		<section className={styles.content}>
			<SelectMultiplierHeader />
			<SelectMultiplierList />
		</section>
	)
}