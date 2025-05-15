import { FC, JSX, RefObject, useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import PageLayout from "../../pageLayout";
import Header from "../../header";
import BackLink from "../../backLink";
import ResultCounter from "../../resultCounter";
import { useAppDispatch, useAppSelector, useSettings } from "../../../features/hooks";
import {	selectEquations } from "../../../store/equationsSlice";
import { multiplicationSolution, deleteMultiplicationSolution } from "../../../store/solutionsSlice";
import { generateOptions, createMultiplierList } from "../../../utils";
import locales from "../../../features/locales";
import styles from "./SelectResultPage.module.scss";

const SelectResultPage: FC = (): JSX.Element => {
	const navigate = useNavigate();
	const multiplierList: number[] = useMemo((): number[] => createMultiplierList(), []);
	const [ currentEquationIndex, setCurrentEquationIndex ] = useState<number>(0);
	const secondMultiplier: number = multiplierList[currentEquationIndex];
	const isTraining: boolean = multiplierList.length > currentEquationIndex;

	useEffect((): void => {
		if(!isTraining) {
			navigate('/training-finished')
		}
	}, [ isTraining, navigate ]);

	const dispatch = useAppDispatch();
	const { language } = useSettings();

	const versions: number[] = useMemo(
		(): number[] => generateOptions(4, 2, 9, secondMultiplier, 3)
		,[ secondMultiplier ]);

	const [ isVersionSelected, setIsVersionSelected] = useState<boolean>(false);
	const buttonRefs: RefObject<(HTMLButtonElement | null)[]> = useRef<(HTMLButtonElement | null)[]>([]);

	const { multiplication } = useAppSelector(selectEquations);
	const { currentSubjectOfRepetition } = multiplication;

	const leftTab: JSX.Element = (
		<BackLink
			to={`/multiplication-table/${currentSubjectOfRepetition}`}
			alt='link to multiplication table'
			onClick={() => dispatch(deleteMultiplicationSolution())}
		/>
	);

	const headerTitle: string = locales[language].selectResult;

	const onVersionClick: (version: number ) =>  void = (
		version: number ): void => {
		setIsVersionSelected(true);
		dispatch(multiplicationSolution({
				subjectOfRepetition: currentSubjectOfRepetition,
				secondMultiplier,
				product: version,
			})
		);
		setCurrentEquationIndex(currentEquationIndex + 1);
		setIsVersionSelected(false);
	};

	const mainContent: JSX.Element = (
		<article className={styles._}>
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
			<ResultCounter questionsTotal={multiplierList.length}	/>
		</article>
	);

	return (
		<PageLayout
			header={<Header leftTab={leftTab} title={headerTitle} />}
			mainContent={mainContent}
		/>
	);
};

export default SelectResultPage;
