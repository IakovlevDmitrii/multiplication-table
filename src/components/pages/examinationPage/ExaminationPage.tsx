import { FC, JSX, useCallback, useMemo, useState, useRef } from "react";
import PageLayout from "../../pageLayout";
import Header from "../../header";
import BackLink from "../../backLink";
import EquationDisplay from "./equationDisplay";
import AnswerOptions from "./answerOptions";
import SummaryLink from "./summaryLink";
import ResultCounter from "../../resultCounter";
import { useLanguage, useSolutions, useTargetMultiplier } from "../../../hooks";
import { createShuffleMultiplierList, generateVersions } from "../../../utils";
import locales from "../../../features/locales";
import styles from "./ExaminationPage.module.scss";

const ExaminationPage: FC = (): JSX.Element => {
	const { currentLanguage } = useLanguage();
	const locale = locales[currentLanguage];
	const { addSolution, clearSolutions } = useSolutions();
	const { targetMultiplier } = useTargetMultiplier();

	const multiplierList: number[] = useMemo(createShuffleMultiplierList, []);

	const [currentEquationIndex, setCurrentEquationIndex] = useState<number>(0);
	const [isVersionSelected, setIsVersionSelected] = useState<boolean>(false);

	const secondMultiplier: number = multiplierList[currentEquationIndex];
	const hasMoreEquations: boolean = multiplierList.length > currentEquationIndex;

	const versions: number[] = useMemo(
		(): number[] => generateVersions(secondMultiplier),
		[secondMultiplier]
	);

	const headerTitle: string = useMemo((): string =>
		hasMoreEquations ? locale.exercise_title : locale.results_title,
		[hasMoreEquations, locale]
	);

	const leftTab: JSX.Element = useMemo((): JSX.Element => (
		<BackLink
			to={`/multiplication-table/${targetMultiplier}`}
			alt='link to multiplication table'
			onClick={clearSolutions}
		/>
	), [targetMultiplier, clearSolutions]);

	const handleVersionSelect = useCallback((version: number ): void => {
		setIsVersionSelected(true);
		addSolution({
			targetMultiplier,
			secondMultiplier,
			product: version,
		});
		setCurrentEquationIndex(prev => prev + 1);
		setIsVersionSelected(false);
	}, [setIsVersionSelected, addSolution, targetMultiplier, secondMultiplier]);

	const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

	const setButtonRef = useCallback((index: number) =>
		(el: HTMLButtonElement | null): void => {
			if (buttonRefs.current) {
				buttonRefs.current[index] = el;
			}
		}, []
	);

	return (
		<PageLayout
			header={
				<Header
					leftTab={leftTab}
					title={headerTitle}
				/>
			}
			mainContent={
				<section className={styles._}>
					<article>
						{hasMoreEquations ? (
							<>
								<EquationDisplay
									target={targetMultiplier}
									second={secondMultiplier}
								/>
								<AnswerOptions
									versions={versions}
									target={targetMultiplier}
									onSelect={handleVersionSelect}
									isDisabled={isVersionSelected}
									setButtonRef={setButtonRef}
								/>
								<ResultCounter />
							</>
						) : (
							<>
								<ResultCounter />
								<SummaryLink
									to={'summary'}
									label={locale.review_button}
								/>
							</>
						)}
					</article>
				</section>
			}
		/>
	);
};

export default ExaminationPage;
