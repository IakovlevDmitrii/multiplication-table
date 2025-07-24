import { FC, JSX } from "react";
import ThemeLanguageSwitcher from "../theme-language-switcher/ThemeLanguageSwitcher";
import styles from "./Header.module.scss";

const Header: FC<{
	leftTab?: JSX.Element;
	title: string;
}> = (
	{ leftTab, title }
): JSX.Element => (
	<header>
		<div className={styles.tabs}>
			<div>{leftTab}</div>
			<ThemeLanguageSwitcher />
		</div>
		<h1>
			<span>{title}</span>
		</h1>
	</header>
);

export default Header;
