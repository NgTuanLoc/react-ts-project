import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { RootState } from '../app/store';
import { IQuestion } from '../typing';

const quizThunk = createAsyncThunk<IQuestion[], void, { state: RootState }>(
	'quiz/getQuiz',
	async (_, thunkAPI) => {
		try {
			const { quiz } = thunkAPI.getState();
			const { amount, category, difficulty } = quiz.query;

			const response = await axios.get(
				`${process.env.API_ENDPOINT}amount=${amount}&difficulty=${difficulty}&category=${category}&type=multiple`
			);

			return response.data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error);
		}
	}
);

export { quizThunk };

// `${API_ENDPOINT}amount=${amount}&difficulty=${difficulty}&category=${table[category]}&type=multiple`

// https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple
