import { FC, JSX } from "react";
import { NavLink } from "react-router-dom";
import PageLayout from "../../pageLayout";
import Header from "../../header";
import BackLink from "../../backLink";
import ResultCounter from "../../resultCounter";
import { useAppDispatch, useAppSelector, useSettings } from "../../../features/hooks";
import { deleteMultiplicationSolution } from "../../../store/solutionsSlice";
import { selectEquations } from "../../../store/equationsSlice";
import locales from "../../../features/locales";
import { MATH_CONFIG } from "../../../utils/config";
import styles from "./TrainingFinishedPage.module.scss";

const TrainingFinishedPage: FC = (): JSX.Element => {
	const dispatch = useAppDispatch();
	const { multiplication } = useAppSelector(selectEquations);
	const { currentSubjectOfRepetition } = multiplication;

	const leftTab: JSX.Element = (
		<BackLink
			to={`/multiplication-table/${currentSubjectOfRepetition}`}
			alt='link to multiplication table'
			onClick={() => dispatch(deleteMultiplicationSolution())}
		/>
	);

	const { language } = useSettings();
	const headerTitle: string = locales[language].trainingFinished;

	const mainContent: JSX.Element = (
		<article className={styles.content}>
			<ResultCounter questionsTotal={MATH_CONFIG.MULTIPLICATION.MULTIPLIER_LIST_LENGTH} />
			<div className={styles.links}>
				<NavLink to='summary'>
					{locales[language].answersLink}
				</NavLink>
			</div>
		</article>
	);

	return (
		<PageLayout
			header={<Header title={headerTitle} leftTab={leftTab} />}
			mainContent={mainContent}
		/>
	);
};

export default TrainingFinishedPage;
