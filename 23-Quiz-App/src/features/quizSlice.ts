import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { quizThunk } from './quizThunk';
import { IQuestion, IApiEndpoint } from '../typing';

const table = {
	sports: 21,
	history: 23,
	politics: 24,
};

interface IState {
	isLoading: boolean;
	error: string;
	quizList: IQuestion[];
	query: IApiEndpoint;
}

const initialState: IState = {
	isLoading: false,
	error: '',
	quizList: [],
	query: {
		amount: 10,
		category: table['sports'],
		difficulty: 'easy',
	},
};

const quizSlice = createSlice({
	name: 'quiz',
	initialState,
	reducers: {
		queryQuizForm: (state: IState, action: PayloadAction<IApiEndpoint>) => {
			state.query = action.payload;
		},
	},
});

export default quizSlice.reducer;
