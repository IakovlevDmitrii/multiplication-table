import { FC, JSX, ReactNode } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import styles from "./PageLayout.module.scss";

const PageLayout: FC<{
	leftTab?: JSX.Element;
	title: string;
	children: ReactNode;
}> = (
	{ leftTab, title, children }
): JSX.Element => (
	<div className={styles._}>
		<Header leftTab={leftTab} title={title} />
		<main>
			<article>
				{children}
			</article>
		</main>
		<Footer />
	</div>
);

export default PageLayout;
