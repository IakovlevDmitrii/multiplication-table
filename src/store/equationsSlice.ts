import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import type { EquationsState } from "../types";
import { MATH_CONFIG } from "../utils/config";

const { MIN_MULTIPLIER } = MATH_CONFIG.MULTIPLICATION;
const initialState: EquationsState = {
	multiplication: {
		currentSubjectOfRepetition: MIN_MULTIPLIER,
	}
};

export const equationsSlice = createSlice({
	name: "equations",
	initialState,
	reducers: {
		changeSubjectOfRepetition_multiplication: (state, action: PayloadAction<number>) => {
			// state.multiplication = {
			// 	...initialState.multiplication,
			// 	multiplierList: createMultiplierList(),
			// 	currentSubjectOfRepetition: action.payload
			// }
			state.multiplication.currentSubjectOfRepetition = action.payload;
		},
		// increaseCurrentEquationIndex: (state) => {
		// 	if(state.multiplication.currentEquationIndex < MULTIPLIER_LIST_LENGTH) {
		// 		state.multiplication.currentEquationIndex++;
		// 	} else {
		// 		state.multiplication.currentEquationIndex = 0;
		// 		state.multiplication.isTraining = false;
		// 	}
		// },
		clearMultiplicationEquation: (state) => {
			state.multiplication = {
				...initialState.multiplication,
			}
		}
	}
});

export const {
	changeSubjectOfRepetition_multiplication,
	clearMultiplicationEquation,
} = equationsSlice.actions;

export const selectEquations = (
	state: RootState) => state.equations;

export default equationsSlice.reducer;