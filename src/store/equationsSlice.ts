import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import MATH_CONFIG from "../utils/config";
import type { RootState } from "./store";
import type { EquationsState, Solution } from "../types";

const initialState: EquationsState = {
	solutions: [],
	targetMultiplier: MATH_CONFIG.MIN_MULTIPLIER,
};

export const equationsSlice = createSlice({
	name: "equations",
	initialState,
	reducers: {
		setTargetMultiplierAction: (
			state, action: PayloadAction<number>
		): void => {
			state.targetMultiplier = action.payload;
		},
		addSolutionAction: (
			state, action: PayloadAction<Solution>
		): void => {
			state.solutions = [
				...state.solutions,
				action.payload
			];
		},
		clearSolutionsAction: (state): void => {
			state.solutions = [];
		},
	}
});

export const {
	setTargetMultiplierAction,
	addSolutionAction,
	clearSolutionsAction,
} = equationsSlice.actions;

export const selectTargetMultiplier =
	(state: RootState): number => state.equations.targetMultiplier;

export const selectSolutions =
	(state: RootState): [] | Solution[] => state.equations.solutions;

export default equationsSlice.reducer;