import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import type { Solution_Multiplication } from "../types";

export interface SolutionsState {
	multiplication: Solution_Multiplication[] | [],
}

const initialState: SolutionsState = {
	multiplication: [],
};

export const solutionsSlice = createSlice({
	name: 'solutions',
	initialState,
	reducers: {
		multiplicationSolution: (
			state,
			action: PayloadAction<Solution_Multiplication>) => {
			// Object.assign(state, action.payload)
			state.multiplication = [...state.multiplication, action.payload];
			// name:[] pushElementName: (state, action) => { state.name = [...state.name, action.payload]; },
			// removeElementName: (state, action) => { state.name = state.name.filter(item => item !== action.payload);

			// todoToggled(state, action: PayloadAction<number>) {
			// 	const td = state[action.payload];
			// 	td.completed = !td.completed;
			// },
		},
		deleteMultiplicationSolution: (state) => {
			state.multiplication = [];
		}
	}
});

export const {
	multiplicationSolution,
	deleteMultiplicationSolution } = solutionsSlice.actions;

export const selectSolutions   = (
	state: RootState) => state.solutions

export default solutionsSlice.reducer