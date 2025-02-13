import { FC, useCallback, useRef } from "react";
import TrainingFinishedPage from "../trainingFinishedPage";
import PageLayout from "../../pageLayout";
import SelectResultHeader from "./selectResultHeader";
import SelectResultContent from "./selectResultContent";
import { useAppDispatch, useAppSelector } from "../../../features/hooks";
import {
	multiplicationSolution,
	deleteMultiplicationSolution,
} from "../../../store/solutionsSlice";
import {
	selectEquations,
	changeSubjectOfRepetition_multiplication,
	decreaseRemainingMultiplierList,
} from "../../../store/equationsSlice";
import {
	fillArrayWithUniqueRandomNumbers,
	getRandomElementFromArray,
} from "../../../utils";
import gsap from "gsap";

const SelectResultPage: FC = () => {
	const { multiplication } = useAppSelector(selectEquations);
	const {
		remainingMultiplierList,
		currentSubjectOfRepetition,
	} = multiplication;
	const dispatch = useAppDispatch();
	const buttonsRef = useRef<(HTMLButtonElement | null)[]>([]);

	const isTrainingFinished = !remainingMultiplierList.length;
	const secondMultiplier: number = getRandomElementFromArray(remainingMultiplierList);
	const versions: number[] = fillArrayWithUniqueRandomNumbers(4, 2, 9, secondMultiplier);
	const correctIndex = versions.indexOf(secondMultiplier);

	const handleLinkToBack = useCallback(()=> {
		dispatch(
			changeSubjectOfRepetition_multiplication(currentSubjectOfRepetition));
		dispatch(
			deleteMultiplicationSolution());
	}, [dispatch, currentSubjectOfRepetition]);


	const onVersionClick =	(
		isCorrect: boolean, value: number, index: number): void => {

		const button = buttonsRef.current[index];
		const correctButton = buttonsRef.current[correctIndex];

		const tl = gsap.timeline();

		tl.to(button, {
			backgroundColor: isCorrect ? "#4CAF50" : "#F44336",
			duration: 0.3,
			ease: "power2.out",
		});

		if (!isCorrect && correctButton) {
			tl.to(correctButton, {
				backgroundColor: "#4CAF50",
				duration: 0.3,
				delay: 0.2,
			});
		}

		// ⚡ Здесь вызываем `onComplete`, чтобы `dispatch` сработал раньше
		tl.to(button, {
			backgroundColor: "",
			duration: 0.5,
			delay: 0.3, // Уменьшаем задержку
			onComplete: () => {
				dispatch(multiplicationSolution({
					subjectOfRepetition: currentSubjectOfRepetition,
					secondMultiplier,
					product: value,
				}));
				dispatch(decreaseRemainingMultiplierList(secondMultiplier));
			},
		});

		if (!isCorrect && correctButton) {
			tl.to(correctButton, {
				backgroundColor: "",
				duration: 0.5,
				delay: 0.3,
			});
		}
	}

	if(isTrainingFinished) {
		return <TrainingFinishedPage/>
	}

	return (
		<PageLayout
			header={
				<SelectResultHeader
					subjectOfRepetition={currentSubjectOfRepetition}
					handleClick={handleLinkToBack}
				/>
			}
			content={
				<SelectResultContent
					refs={buttonsRef}
					subjectOfRepetition={currentSubjectOfRepetition}
					secondMultiplier={secondMultiplier}
					versions={versions}
					onVersionClick={onVersionClick}
				/>
			}
		/>
	)
};

export default SelectResultPage;
