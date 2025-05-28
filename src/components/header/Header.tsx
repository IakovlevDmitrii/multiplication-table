import { FC, JSX } from "react";
import ThemeLanguageSwitcher from "../theme-language-switcher";
import styles from './Header.module.scss';

interface HeaderProps {
	title: string;
	leftTab?: JSX.Element;
}

const Header: FC<HeaderProps> = (
	{ title, leftTab }: HeaderProps
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