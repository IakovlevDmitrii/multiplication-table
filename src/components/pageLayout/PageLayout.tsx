import { FC, JSX } from "react";
import ThemeLanguageSwitcher from "../theme-language-switcher/ThemeLanguageSwitcher";
import styles from "./PageLayout.module.scss";

const PageLayout: FC<{
	leftTab?: JSX.Element;
	title: string;
	content: JSX.Element;
}> = (
	{ leftTab, title, content }
): JSX.Element => (
	<div className={styles._}>
		<header>
			<div className={styles.tabs}>
				<div>
					{leftTab}
				</div>
				<ThemeLanguageSwitcher />
			</div>
			<h1>
				<span>{title}</span>
			</h1>
		</header>
		<main>
			<article>
				{content}
			</article>
		</main>
		<footer>
			<p>&copy; 2025 ID</p>
		</footer>
	</div>
);

export default PageLayout;
