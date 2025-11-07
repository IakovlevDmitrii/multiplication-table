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
import { createShuffleMultiplierList, generateCandidateMultipliers } from "../../../utils";
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
	const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
	const [correctIndex, setCorrectIndex] = useState<number | null>(null);

	const secondMultiplier: number = multiplierList[currentEquationIndex];
	const hasMoreEquations: boolean = multiplierList.length > currentEquationIndex;

	const candidateMultipliers: number[] = useMemo(
		(): number[] =>
			generateCandidateMultipliers(secondMultiplier)
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

	const onVersionSelect = useCallback(
		(index: number): void => {
			setIsVersionSelected(true);
			setSelectedIndex(index);

			const correctIndex = candidateMultipliers.indexOf(secondMultiplier);
			setCorrectIndex(correctIndex);

			if (candidateMultipliers[index] !== secondMultiplier && "vibrate" in navigator) {
				navigator.vibrate(150);
			}

			if (targetMultiplier) {
				addSolution({
					targetMultiplier,
					secondMultiplier,
					product: candidateMultipliers[index] * secondMultiplier,
				});
			}

			setTimeout(() => {
				setCurrentEquationIndex(prev => prev + 1);
				setSelectedIndex(null);
				setCorrectIndex(null);
				setIsVersionSelected(false);
			}, 800);
		}, [setIsVersionSelected, addSolution, secondMultiplier, targetMultiplier, candidateMultipliers]
	);

	const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

	const setButtonRef = useCallback(
		(index: number) =>
			(el: HTMLButtonElement | null): void => {
				if (buttonRefs.current) {
					buttonRefs.current[index] = el;
				}
			}, []
	);

	return (
		<PageLayout leftTab={leftTab} title={title}>
			{hasMoreEquations ? (
				<>
					<EquationDisplay target={targetMultiplier} second={secondMultiplier}/>
					<AnswerOptions
						key={`${targetMultiplier}-${candidateMultipliers.join("-")}`}
						multipliers={candidateMultipliers}
						target={targetMultiplier}
						onSelect={onVersionSelect}
						isDisabled={isVersionSelected}
						selectedIndex={selectedIndex}
						correctIndex={correctIndex}
						setButtonRef={setButtonRef}
					/>
					<ResultCounter />
				</>
			) : (
				<>
					<ResultCounter />
					<SummaryLink to={'summary'} label={locale.review_button}/>
				</>
			)}
		</PageLayout>
	);
};

export default ExaminationPage;
