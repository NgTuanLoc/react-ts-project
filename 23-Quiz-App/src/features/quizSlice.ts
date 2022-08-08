import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { quizThunk } from './quizThunk';
import { IQuestion, IApiEndpoint } from '../typing';

export const table = {
	sports: 21,
	history: 23,
	politics: 24,
};

interface IState {
	isLoading: boolean;
	error: string;
	quizList: IQuestion[];
	query: IApiEndpoint;
	selectedQuiz: number;
	isModalOpen: boolean;
	correctAnswer: number;
}

const initialState: IState = {
	isLoading: false,
	correctAnswer: 0,
	error: '',
	quizList: [],
	selectedQuiz: 0,
	isModalOpen: false,
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
			const { amount, category, difficulty } = action.payload;

			state.query = { amount: Number(amount), category, difficulty };
		},
		nextQuiz: (state: IState) => {
			state.selectedQuiz = state.selectedQuiz + 1;
		},
		openModal: (state: IState) => {
			state.isModalOpen = true;
		},
		closeModal: (state: IState) => {
			state.isModalOpen = false;
			state.quizList = [];
			state.selectedQuiz = 0;
			state.correctAnswer = 0;
		},
		checkAnswer: (state: IState, action: PayloadAction<boolean>) => {
			state.correctAnswer += action.payload ? 1 : 0;
		},
	},
	extraReducers(builder) {
		builder.addCase(quizThunk.pending, (state) => {
			state.isLoading = true;
			state.error = '';
		});
		builder.addCase(quizThunk.fulfilled, (state, { payload }) => {
			state.isLoading = false;
			state.error = '';
			state.quizList = payload;
		});
		builder.addCase(quizThunk.rejected, (state, { payload }) => {
			state.isLoading = false;

			if (payload) {
				state.error = payload as string;
			}
		});
	},
});

export const { queryQuizForm, nextQuiz, openModal, closeModal, checkAnswer } =
	quizSlice.actions;

export default quizSlice.reducer;
