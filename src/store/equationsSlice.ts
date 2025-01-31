import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import { createArrayRange } from "../utils";

const multiplierList: number[] = createArrayRange(2, 9, 1);

export interface EquationsState {
	multiplication: {
		multiplierList: number[],
		remainingMultiplierList: number[] | [],
		currentSubjectOfRepetition: number,
	}
}

const initialState: EquationsState = {
	multiplication: {
		multiplierList,
		remainingMultiplierList: multiplierList,
		currentSubjectOfRepetition: 2,
	}
};

export const equationsSlice = createSlice({
	name: "equations",
	initialState,
	reducers: {
		changeSubjectOfRepetition_multiplication: (state, action: PayloadAction<number>) => {
			state.multiplication = {
				...initialState.multiplication,
				currentSubjectOfRepetition: action.payload
			}
		},
		decreaseRemainingMultiplierList: (state, action: PayloadAction<number>) => {
			state.multiplication.remainingMultiplierList =
				state.multiplication.remainingMultiplierList.filter(item => item !== action.payload);
		}
	}
});

export const {
	changeSubjectOfRepetition_multiplication,
	decreaseRemainingMultiplierList } = equationsSlice.actions;

export const selectEquations = (
	state: RootState) => state.equations;

export default equationsSlice.reducer;