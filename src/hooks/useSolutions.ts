import { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "./index";
import { selectSolutions, addSolutionAction, clearSolutionsAction } from "../store/equationsSlice";
import type { Solution } from "../types";

const useSolutions = () => {
	const dispatch = useAppDispatch();
	const solutions: [] | Solution[] = useAppSelector(selectSolutions);

	const addSolution: (solution: Solution) => void = useCallback(
		(solution: Solution): void => {
			dispatch(addSolutionAction(solution));
		},
		[dispatch]
	);

	const clearSolutions: () => void = useCallback(
		(): void => {
			dispatch(clearSolutionsAction());
		},
		[dispatch]
	);

	return {
		solutions,
		addSolution,
		clearSolutions
	};
};

export default useSolutions;