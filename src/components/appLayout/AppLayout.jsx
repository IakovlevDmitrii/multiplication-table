import React from 'react';
import SelectMultiplierPage from "../pages/select-multiplier-page";
import styles from './appLayout.module.scss'

export default function AppLayout() {
   return (
		<div className={styles.content}>
			<SelectMultiplierPage />
		</div>
	)
}
