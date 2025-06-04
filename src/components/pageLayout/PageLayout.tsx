import { FC, JSX } from "react";
import ThemeLanguageSwitcher from "../theme-language-switcher/ThemeLanguageSwitcher";
import styles from "./PageLayout.module.scss";

const PageLayout: FC<{
	leftTab?: JSX.Element;
	title: string;
	main: JSX.Element;
}> = (
	{ leftTab, title, main }
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
			{main}
		</main>
	</div>
);

export default PageLayout;
