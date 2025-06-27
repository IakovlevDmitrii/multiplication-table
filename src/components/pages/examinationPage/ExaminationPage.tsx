import { FC, JSX, useCallback, useMemo, useState, useRef } from "react";
import PageLayout from "../../pageLayout/PageLayout";
import BackLink from "../../backLink/BackLink";
import EquationDisplay from "./equationDisplay/EquationDisplay";
import AnswerOptions from "./answerOptions/AnswerOptions";
import SummaryLink from "./summaryLink/SummaryLink";
import ResultCounter from "../../resultCounter/ResultCounter";
import { useAppDispatch, useAppSelector, useLanguage } from "../../../hooks";
import { addSolutionAction, clearSolutionsAction } from "../../../store/equations/equationsSlice";
import { selectTargetMultiplier } from "../../../store/equations/equationsSelectors";
import { createShuffleMultiplierList, generateVersions } from "../../../utils";
import locales from "../../../features/locales";
import type { Solution } from "../../../types";

const ExaminationPage: FC = (): JSX.Element => {
	const dispatch = useAppDispatch();
	const { currentLanguage } = useLanguage();
	const locale = locales[currentLanguage];
	const targetMultiplier = useAppSelector(selectTargetMultiplier);

	const addSolution: (solution: Solution) => void = useCallback(
		(solution: Solution): void => {
			dispatch(addSolutionAction(solution));
		}, [dispatch]
	);

	const clearSolutions: () => void = useCallback(
		(): void => {
			dispatch(clearSolutionsAction());
		}, [dispatch]
	);

	const multiplierList: number[] = useMemo(
		createShuffleMultiplierList, []
	);

	const [currentEquationIndex, setCurrentEquationIndex] = useState<number>(0);
	const [isVersionSelected, setIsVersionSelected] = useState<boolean>(false);

	const secondMultiplier: number = multiplierList[currentEquationIndex];
	const hasMoreEquations: boolean = multiplierList.length > currentEquationIndex;

	const versions: number[] = useMemo(
		(): number[] =>
			generateVersions(secondMultiplier)
		, [secondMultiplier]
	);

	const title: string = useMemo(
		(): string =>
			hasMoreEquations ? locale.exercise_title : locale.results_title
		, [hasMoreEquations, locale]
	);

	const leftTab: JSX.Element = useMemo(
		(): JSX.Element => (
			<BackLink
				to={`/multiplication-table/${targetMultiplier}`}
				alt='link to multiplication table'
				onClick={clearSolutions}
			/>
		), [targetMultiplier, clearSolutions]
	);

	const handleVersionSelect = useCallback(
		(version: number ): void => {
			setIsVersionSelected(true);
			if(targetMultiplier) {
				addSolution({
					targetMultiplier,
					secondMultiplier,
					product: version,
				});
			}
			setCurrentEquationIndex(prev => prev + 1);
			setIsVersionSelected(false);
		}, [setIsVersionSelected, addSolution, targetMultiplier, secondMultiplier]
	);

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
			leftTab={leftTab}
			title={title}
			content={hasMoreEquations ? (
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
		/>
	);
};

export default ExaminationPage;
