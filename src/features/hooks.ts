import { useDispatch, useSelector } from "react-redux";
import { selectSettings } from "../store/settingsSlice";
import { selectEquations } from "../store/equationsSlice";
import { createArrayRange, getMultiplicationSolutionsList } from "../utils";
import { MATH_CONFIG } from "../utils/config";
import type { AppDispatch, RootState } from "../store/store";
import type { Solution_Multiplication } from "../types";

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()

export const useSettings = () => useSelector(selectSettings);

export const useSolutionList: () => Solution_Multiplication[] = (): Solution_Multiplication[] => {
	const { multiplication } = useAppSelector(selectEquations);
	const { currentSubjectOfRepetition } = multiplication;
	const {
		MIN_MULTIPLIER,
		MAX_MULTIPLIER,
	} = MATH_CONFIG.MULTIPLICATION;
	const list: number[] = createArrayRange(MIN_MULTIPLIER, MAX_MULTIPLIER);

	return getMultiplicationSolutionsList(
		currentSubjectOfRepetition ?? MIN_MULTIPLIER,
		list
	);
};
