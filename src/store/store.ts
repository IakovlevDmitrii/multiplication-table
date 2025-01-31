import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import solutionsReducer from "./solutionsSlice";
import equationsReducer from "./equationsSlice";
import { createArrayRange } from "../utils";

const multiplierList: number[] = createArrayRange(2, 9, 1);

const reducer = {
	solutions: solutionsReducer,
	equations: equationsReducer,
};

const preloadedState = {
	solutions: {
		multiplication: [],
	},
	equations: {
		multiplication: {
			multiplierList: multiplierList,
			remainingMultiplierList: multiplierList,
			currentSubjectOfRepetition: 2,
		}
	}
};

const store = configureStore({
	reducer,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
	devTools: process.env.NODE_ENV !== 'production',
	preloadedState,
});

export default store

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
// export type AppStore = typeof store
