import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import type { Language, SettingsState, Theme } from "../types";

const initialState: SettingsState = {
	language: "en",
	theme: "light",
};

// const loadInitialState = (): LanguageState => {
// 	const saved = localStorage.getItem('appLanguage');
// 	return saved
// 		? { current: saved as Language }
// 		: initialState;
// };

export const settingsSlice = createSlice({
	name: "settings",
	initialState,
	reducers: {
		setLanguageAction: (
			state,
			action: PayloadAction<Language>
		): void => {
			state.language = action.payload;
			// localStorage.setItem('appLanguage', action.payload);
		},
		toggleThemeAction: (
			state
		): void => {
			state.theme = state.theme === "dark" ? "light" : "dark";
		},
	},
});

export const {
	setLanguageAction,
	toggleThemeAction,
} = settingsSlice.actions;

export const selectLanguage = (
	state: RootState
): Language => state.settings.language;

export const selectTheme = (
	state: RootState
): Theme => state.settings.theme;

export default settingsSlice.reducer
