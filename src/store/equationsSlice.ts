import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import type { EquationsState, Solution_Multiplication } from "../types";
import { MATH_CONFIG } from "../utils/config";

const { MIN_MULTIPLIER } = MATH_CONFIG.MULTIPLICATION;
const initialState: EquationsState = {
	multiplication: {
		currentSubjectOfRepetition: MIN_MULTIPLIER,
		solutions: [],
	}
};

export const equationsSlice = createSlice({
	name: "equations",
	initialState,
	reducers: {
		changeSubjectOfRepetition_multiplication: (
			state,
			action: PayloadAction<number>
		): void => {
			state.multiplication.currentSubjectOfRepetition = action.payload;
		},
		addSolution_multiplication: (
			state,
			action: PayloadAction<Solution_Multiplication>
		) => {
			state.multiplication.solutions = [
				...state.multiplication.solutions,
				action.payload
			];
		},
		clearSolutions_multiplication: (
			state,
		) => {
			state.multiplication.solutions = [];
		},
		clearEquations_multiplication: (
			state
		) => {
			state.multiplication = {
				...initialState.multiplication,
			}
		},
	}
});

export const {
	changeSubjectOfRepetition_multiplication,
	addSolution_multiplication,
	clearSolutions_multiplication,
	clearEquations_multiplication,
} = equationsSlice.actions;

export const selectEquations = (
	state: RootState) => state.equations;

export default equationsSlice.reducer;