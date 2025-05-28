import { FC, JSX, RefObject, useMemo, useRef, useState } from "react";
import classNames from "classnames";
import { NavLink } from "react-router-dom";
import PageLayout from "../../pageLayout";
import Header from "../../header";
import BackLink from "../../backLink";
import ResultCounter from "../../resultCounter";
import { useLanguage, useSolutions, useTargetMultiplier } from "../../../features/hooks";
import { createShuffleMultiplierList, generateVersions } from "../../../utils";
import locales from "../../../features/locales";
import styles from "./ExaminationPage.module.scss";

const ExaminationPage: FC = (): JSX.Element => {
	const { currentLanguage } = useLanguage();
	const locale = locales[currentLanguage];
	const { addSolution, clearSolutions } = useSolutions();
	const { targetMultiplier } = useTargetMultiplier();

	const multiplierList: number[] = useMemo(
		(): number[] => createShuffleMultiplierList(),
		[]
	);

	const [ currentEquationIndex, setCurrentEquationIndex ] = useState<number>(0);
	const secondMultiplier: number = multiplierList[currentEquationIndex];
	const [ isVersionSelected, setIsVersionSelected ] = useState<boolean>(false);

	const versions: number[] = useMemo(
		(): number[] => generateVersions(secondMultiplier),
		[secondMultiplier]
	);

	const buttonRefs: RefObject<(HTMLButtonElement | null)[]> =
		useRef<(HTMLButtonElement | null)[]>([]);

	const leftTab: JSX.Element = (
		<BackLink
			to={`/multiplication-table/${targetMultiplier}`}
			alt='link to multiplication table'
			onClick={clearSolutions}
		/>
	);

	const headerTitle: string = multiplierList.length > currentEquationIndex
		? locale.selectResult
		: locale.trainingFinished;

	const onVersionClick: (version: number ) =>  void = (
		version: number
	): void => {
		setIsVersionSelected(true);
		addSolution({
			targetMultiplier,
			secondMultiplier,
			product: version,
		});
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
								{`${targetMultiplier} * ${secondMultiplier} = ?`}
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
											onClick={(): void => onVersionClick(version * targetMultiplier)}
											disabled={isVersionSelected}
										>
											{version * targetMultiplier}
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
							{locale.answersLink}
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
