import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import type { Language, Theme } from "../types";

interface UiState {
	lang: Language,
	theme: Theme,
}

const initialState: UiState = {
	lang: "eng",
	theme: "light",
};

export const uiSlice = createSlice({
	name: "ui",
	initialState,
	reducers: {
		toggleLanguage: (state) => {
			state.lang = state.lang === "ru" ? "eng" : "ru";
		},
		toggleTheme: (state) => {
			state.theme = state.theme === "dark" ? "light" : "dark";
		},
	},
});

export const {
	toggleLanguage,
	toggleTheme,
} = uiSlice.actions;

export const selectUi = (
	state: RootState) => state.ui;

export default uiSlice.reducer
