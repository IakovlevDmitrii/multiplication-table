import { FC, JSX } from "react";
import { NavLink } from "react-router-dom";
import styles from "./SummaryLink.module.scss";

const SummaryLink: FC<{
	to: string; label: string
}> = (
	{ to, label }): JSX.Element => (
	<div className={styles._}>
		<NavLink to={to}>{label}</NavLink>
	</div>
);

export default SummaryLink;
