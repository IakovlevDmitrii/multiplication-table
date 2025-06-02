import { FC, JSX } from "react";
import styles from "./PageLayout.module.scss";

const PageLayout: FC<{
	header: JSX.Element;
	main: JSX.Element;
}> = (
	{ header, main }
): JSX.Element => (
	<div className={styles._}>
		<header>{header}</header>
		<main>{main}</main>
	</div>
);

export default PageLayout;
