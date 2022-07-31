import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { getPostPerPage } from './postThunk';
import { IPost } from '../typing';
export interface IState {
	isLoading: boolean;
	hits: IPost[];
	query: string;
	page: number;
	nbPages: number;
	error: string;
}

const initialState: IState = {
	isLoading: true,
	hits: [],
	query: 'angular',
	page: 0,
	nbPages: 0,
	error: '',
};

const postSlice = createSlice({
	name: 'post',
	initialState,
	reducers: {
		previousPage: (state: IState) => {
			let tempPage = state.page - 1;
			state.page = tempPage < 0 ? state.nbPages - 1 : tempPage;
		},
		nextPage: (state: IState) => {
			let tempPage = state.page + 1;
			state.page = tempPage > state.nbPages - 1 ? 0 : tempPage;
		},
		searchPost: (state: IState, action: PayloadAction<string>) => {
			state.query = action.payload;
			state.page = 0;
		},
		filterPost: (state: IState, action: PayloadAction<string>) => {
			const deletedPostId = action.payload;
			state.hits = state.hits.filter((item) => item.objectID !== deletedPostId);
		},
	},
	extraReducers: (builder) => {
		builder.addCase(getPostPerPage.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(getPostPerPage.fulfilled, (state, { payload }) => {
			state.isLoading = false;
			state.hits = payload.hits;
			state.nbPages = payload.nbPages;
		});
		builder.addCase(getPostPerPage.rejected, (state, { payload }) => {
			state.isLoading = true;
			state.error = payload as string;
		});
	},
});

export const { previousPage, nextPage, searchPost, filterPost } =
	postSlice.actions;

export default postSlice.reducer;
