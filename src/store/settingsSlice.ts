import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import type { Language, Theme } from "../types";

interface SettingsState {
	language: Language,
	theme: Theme,
}

const initialState: SettingsState = {
	language: "en",
	theme: "light",
};

export const settingsSlice = createSlice({
	name: "settings",
	initialState,
	reducers: {
		toggleLanguage: (state) => {
			state.language = state.language === "ru" ? "en" : "ru";
		},
		toggleTheme: (state) => {
			state.theme = state.theme === "dark" ? "light" : "dark";
		},
	},
});

export const {
	toggleLanguage,
	toggleTheme,
} = settingsSlice.actions;

export const selectSettings = (
	state: RootState) => state.settings;

export default settingsSlice.reducer
