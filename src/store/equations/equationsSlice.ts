import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { EquationsState, Solution } from "../../types";

const initialState: EquationsState = {
	solutions: [],
	targetMultiplier: null,
};

export const equationsSlice = createSlice({
	name: "equations",
	initialState,
	reducers: {
		setTargetMultiplierAction: (
			state, action: PayloadAction<number | null>
		): void => {
			state.targetMultiplier = action.payload;
		},
		clearTargetMultiplierAction: (state) => {
			state.targetMultiplier = null;
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
	clearTargetMultiplierAction,
	addSolutionAction,
	clearSolutionsAction,
} = equationsSlice.actions;

export default equationsSlice.reducer;