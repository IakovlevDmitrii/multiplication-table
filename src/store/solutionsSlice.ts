import { createSlice } from "@reduxjs/toolkit";

// import { createAsyncThunk } from '@reduxjs/toolkit'

import type { PayloadAction } from "@reduxjs/toolkit";
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
			state.multiplication = [...state.multiplication, action.payload];

			// Object.assign(state, action.payload)
			// name:[] pushElementName: (state, action) => { state.name = [...state.name, action.payload]; },
			// removeElementName: (state, action) => { state.name = state.name.filter(item => item !== action.payload);

			// removeTodo: (state, action) => {
			// 	return state.filter(td => td.id !== action.payload);
			// }

			// todoToggled(state, action: PayloadAction<number>) {
			// 	const td = state[action.payload];
			// 	td.completed = !td.completed;
			// },

			// postUpdated(state, action: PayloadAction<Post>) {
			// 	const { id, title, content } = action.payload
			// 	const existingPost = state.find(post => post.id === id)
			// 	if (existingPost) {
			// 		existingPost.title = title
			// 		existingPost.content = content
			// 	}
			// }
		},
		deleteMultiplicationSolution: (state) => {
			state.multiplication = [];
		},

		// postAdded: {
		// 	reducer(state, action: PayloadAction<Post>) {
		// 		state.push(action.payload)
		// 	},
		// 	prepare(title: string, content: string, userId: string) {
		// 		return {
		// 			payload: {
		// 				id: nanoid(),
		// 				title,
		// 				content,
		// 				user: userId
		// 			}
		// 		}
		// 	}
		// },

	},

	// selectors: {
		// Note that these selectors are given just the `PostsState`
		// as an argument, not the entire `RootState`
		// selectAllPosts: postsState => postsState,
		// selectPostById: (postsState, postId: string) => {
		// 	return postsState.find(post => post.id === postId)
		// }
	// }

	// extraReducers: builder => {
	// 	builder
	// 		// Handle the action types defined by the `incrementAsync` thunk defined below.
	// 		// This lets the slice reducer update the state with request status and results.
	// 		.addCase(incrementAsync.pending, state => {
	// 			state.status = 'loading'
	// 		})
	// 		.addCase(incrementAsync.fulfilled, (state, action) => {
	// 			state.status = 'idle'
	// 			state.value += action.payload
	// 		})
	// 		.addCase(incrementAsync.rejected, state => {
	// 			state.status = 'failed'
	// 		})
	// }
});

export const {
	multiplicationSolution,
	deleteMultiplicationSolution } = solutionsSlice.actions;

export const selectSolutions   = (
	state: RootState) => state.solutions

export default solutionsSlice.reducer

// export const incrementIfOdd = (amount: number): AppThunk => {
// 	return (dispatch, getState) => {
// 		const currentValue = selectCount(getState())
// 		if (currentValue % 2 === 1) {
// 			dispatch(incrementByAmount(amount))
// 		}
// 	}
// }
// store.dispatch(incrementIfOdd(6))

// the outside "thunk creator" function
// const fetchUserById = (userId: string): AppThunk => {
	// the inside "thunk function"
	// return async (dispatch, getState) => {
	// 	try {
	// 		dispatch(userPending())
			// make an async call in the thunk
			// const user = await userAPI.fetchById(userId)
			// dispatch an action when we get the response back
			// dispatch(userLoaded(user))
		// } catch (err) {
			// If something went wrong, handle it here
		// }
	// }
// }

// export const incrementAsync = createAsyncThunk(
// 	'counter/fetchCount',
// 	async (amount: number) => {
// 		const response = await fetchCount(amount)
		// The value we return becomes the `fulfilled` action payload
		// return response.data
	// }
// )

// export const fetchItemById = createAsyncThunk(
// 	'items/fetchItemById',
// 	async (itemId: string) => {
// 		const item = await someHttpRequest(itemId)
// 		return item
// 	}
// )