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

			const response = await axios.get<any>(
				`${process.env.REACT_APP_API_ENDPOINT}amount=${amount}&difficulty=${difficulty}&category=${category}&type=multiple`
			);

			return response.data.results as IQuestion[];
		} catch (error) {
			return thunkAPI.rejectWithValue(error);
		}
	}
);

export { quizThunk };
