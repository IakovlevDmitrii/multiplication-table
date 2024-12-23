import React from 'react';
import Example from "../example";
import styles from './appLayout.module.scss'

export default function AppLayout() {
   return (
		<div className={styles.content}>
			<Example />
		</div>
	)
}
