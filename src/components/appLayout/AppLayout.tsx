import React from 'react';
import { Outlet } from 'react-router-dom';
import Canvas from "../../utils/cursor/Canvas";
import styles from './AppLayout.module.scss';

export default function AppLayout(): React.JSX.Element {
	return (
		<div className={styles.container}>
			<Canvas/>
			<Outlet/>
		</div>
	)
}
