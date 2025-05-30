import { FC, JSX } from "react";
import ThemeLanguageSwitcher from "../theme-language-switcher/ThemeLanguageSwitcher";
import styles from './Header.module.scss';

const Header: FC<{
	title: string;
	leftTab?: JSX.Element;
}> = (
	{ title, leftTab }
): JSX.Element => (
	<div className={styles._}>
		<div className={styles.tabs}>
			<div>
				{leftTab}
			</div>
			<ThemeLanguageSwitcher />
		</div>
		<h1>
			<span>{title}</span>
		</h1>
	</div>
);

export default Header;