import { configureStore } from "@reduxjs/toolkit";
// import type { Action, ThunkAction } from '@reduxjs/toolkit'

import logger from "redux-logger";
import solutionsReducer from "./solutionsSlice";
import equationsReducer from "./equationsSlice";
import settingsReducer from "./settingsSlice";

const reducer = {
	solutions: solutionsReducer,
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
// export type RootState = ReturnType<typeof store.getState>

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}

export type AppDispatch = AppStore['dispatch']
// export type AppDispatch = typeof store.dispatch

// export type AppThunk<ThunkReturnType = void> = ThunkAction<
// 	ThunkReturnType,
// 	RootState,
// 	unknown,
// 	Action
// >