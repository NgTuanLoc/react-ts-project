import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { ISingleMovieInList, IMovieInfo, IError } from '../typing';

const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;

const getMovieList = createAsyncThunk<
	ISingleMovieInList[],
	string,
	{ rejectValue: IError }
>('movie/getMovieList', async (query, thunkAPI) => {
	const url = `${API_ENDPOINT}&s=${query}`;
	const response = await axios.get(url);
	const data = response.data;

	if (data.Response === 'False') {
		const error = {
			show: true,
			msg: data.Error as string,
		};
		return thunkAPI.rejectWithValue(error);
	}

	return data.Search as ISingleMovieInList[];
});

const getMovieInfo = createAsyncThunk<
	IMovieInfo,
	string,
	{ rejectValue: IError }
>('movie/getMovieInfo', async (query, thunkAPI) => {
	const url = `${API_ENDPOINT}&i=${query}`;
	const response = await axios.get(url);
	const data = response.data;

	if (data.Response === 'False') {
		const error = {
			show: true,
			msg: data.Error as string,
		};
		return thunkAPI.rejectWithValue(error);
	}

	return data as IMovieInfo;
});

export { getMovieList, getMovieInfo };
