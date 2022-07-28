import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ISingleMovieInList, IError } from '../typing';
import { getMovieList } from './movieThunk';

export interface MovieState {
	isLoading: boolean;
	error: IError;
	query: string;
	movieList: ISingleMovieInList[];
}

const initialState: MovieState = {
	isLoading: false,
	error: {
		show: false,
		msg: '',
	},
	query: 'doctor',
	movieList: [],
};

const movieSlice = createSlice({
	name: 'movie',
	initialState,
	reducers: {
		searchMovie: (state: { query: string }, action: PayloadAction<string>) => {
			state.query = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(getMovieList.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(getMovieList.fulfilled, (state, { payload }) => {
			state.isLoading = false;
			state.movieList = payload;
		});
		builder.addCase(getMovieList.rejected, (state, { payload, error }) => {
			state.isLoading = false;
			if (payload) {
				state.error = payload;
			} else {
				state.error = {
					show: true,
					msg: error as string,
				};
			}
		});
	},
});

export const { searchMovie } = movieSlice.actions;

export default movieSlice.reducer;
