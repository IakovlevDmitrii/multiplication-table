import { FC, JSX, RefObject, useMemo, useRef, useState } from "react";
import classNames from "classnames";
import { NavLink } from "react-router-dom";
import PageLayout from "../../pageLayout";
import Header from "../../header";
import BackLink from "../../backLink";
import ResultCounter from "../../resultCounter";
import { useAppSelector, useAppDispatch, useSettings } from "../../../features/hooks";
import {
	selectEquations,
	addSolution_multiplication,
	clearSolutions_multiplication,
} from "../../../store/equationsSlice";
import { createShuffleMultiplierList, generateVersions } from "../../../utils";
import locales from "../../../features/locales";
import styles from "./ExaminationPage.module.scss";

const ExaminationPage: FC = (): JSX.Element => {
	const multiplierList: number[] = useMemo(
		(): number[] => createShuffleMultiplierList(),
		[]
	);
	const [ currentEquationIndex, setCurrentEquationIndex ] = useState<number>(0);
	const secondMultiplier: number = multiplierList[currentEquationIndex];
	const [ isVersionSelected, setIsVersionSelected ] = useState<boolean>(false);
	const dispatch = useAppDispatch();
	const { multiplication } = useAppSelector(selectEquations);
	const { currentSubjectOfRepetition } = multiplication;
	const { language } = useSettings();

	const versions: number[] = useMemo(
		(): number[] => generateVersions(secondMultiplier),
		[secondMultiplier]
	);

	const buttonRefs: RefObject<(HTMLButtonElement | null)[]> =
		useRef<(HTMLButtonElement | null)[]>([]);

	const leftTab: JSX.Element = (
		<BackLink
			to={`/multiplication-table/${currentSubjectOfRepetition}`}
			alt='link to multiplication table'
			onClick={() => dispatch(
				clearSolutions_multiplication()
			)}
		/>
	);

	const headerTitle: string = multiplierList.length > currentEquationIndex ?
		locales[language].selectResult :
		locales[language].trainingFinished;

	const onVersionClick: (version: number ) =>  void = (
		version: number
	): void => {
		setIsVersionSelected(true);
		dispatch(
			addSolution_multiplication({
				subjectOfRepetition: currentSubjectOfRepetition,
				secondMultiplier,
				product: version,
			})
		);
		setCurrentEquationIndex(currentEquationIndex + 1);
		setIsVersionSelected(false);
	};

	const mainContent: JSX.Element = (
		<section className={styles._}>
			<article>
				{multiplierList.length > currentEquationIndex &&
					<>
						<div className={styles.condition}>
							<div>
								{`${currentSubjectOfRepetition} * ${secondMultiplier} = ?`}
							</div>
						</div>
						<div className={styles.versions}>
							<ol>
								{versions.map((version: number, index: number): JSX.Element => (
									<li key={version}>
										<button
											ref={(el: HTMLButtonElement | null): void => {
												if (buttonRefs.current) {
													buttonRefs.current[index] = el;
												}
											}}
											className={classNames(styles.version, styles.opacity)}
											type="button"
											onClick={(): void => onVersionClick(version * currentSubjectOfRepetition)}
											disabled={isVersionSelected}
										>
											{version * currentSubjectOfRepetition}
										</button>
									</li>
								))}
							</ol>
						</div>
					</>
				}
				<ResultCounter />
				{multiplierList.length <= currentEquationIndex &&
					<div className={styles.links}>
						<NavLink to='summary'>
							{locales[language].answersLink}
						</NavLink>
					</div>
				}
			</article>
		</section>
	);

	return (
		<PageLayout
			header={<Header leftTab={leftTab} title={headerTitle} />}
			mainContent={mainContent}
		/>
	);
};

export default ExaminationPage;
