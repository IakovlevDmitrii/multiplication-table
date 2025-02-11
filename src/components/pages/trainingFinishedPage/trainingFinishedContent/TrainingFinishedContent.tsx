import {FC, JSX} from "react";
import { NavLink } from "react-router-dom";
import ResultCounter from "../../../resultCounter";
import styles from "./TrainingFinishedContent.module.scss";

interface TrainingFinishedContentProps {
	answersLink: JSX.Element,
}

const TrainingFinishedContent: FC<TrainingFinishedContentProps> = (
	{ answersLink }
) => (
	<article className={styles.content}>
		<ResultCounter />
		<div className={styles.links}>
			<NavLink to='summary'>
				{answersLink}
			</NavLink>
		</div>
	</article>
);

export default TrainingFinishedContent;
