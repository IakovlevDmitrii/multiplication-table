import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import equationsReducer from "./equationsSlice";
import settingsReducer from "./settingsSlice";

const reducer = {
	equations: equationsReducer,
	settings: settingsReducer,
};

const store = configureStore({
	reducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(logger),
	devTools: process.env.NODE_ENV !== 'production',
});

export default store
export type AppStore = typeof store
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
