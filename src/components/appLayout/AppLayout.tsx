import React from 'react';
import { Outlet } from "react-router-dom";
import styles from './appLayout.module.scss'

export default function AppLayout() {
   return (
		<div className={styles.content}>
			<div>
				<Outlet />
			</div>
		</div>
	)
}
