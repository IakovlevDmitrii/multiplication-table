import { FC, JSX, ReactNode } from "react";
import ThemeLanguageSwitcher from "../theme-language-switcher/ThemeLanguageSwitcher";
import styles from "./PageLayout.module.scss";

const PageLayout: FC<{
	leftTab?: JSX.Element;
	title: string;
	children: ReactNode;
}> = (
	{ leftTab, title, children }
): JSX.Element => (
	<div className={styles._}>
		<header>
			<div className={styles.tabs}>
				<div>{leftTab}</div>
				<ThemeLanguageSwitcher />
			</div>
			<h1>
				<span>{title}</span>
			</h1>
		</header>
		<main>
			<article>
				{children}
			</article>
		</main>
		<footer>
			<p>&copy; 2025 ID</p>
		</footer>
	</div>
);

export default PageLayout;
