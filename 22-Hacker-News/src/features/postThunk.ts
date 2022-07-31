import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { IPost } from '../typing';
import { RootState } from '../app/store';

export interface IReturnedType {
	hits: IPost[];
	nbPages: number;
}

const getPostPerPage = createAsyncThunk<
	IReturnedType,
	void,
	{
		state: RootState;
	}
>('post/getPostPerPage', async (_, thunkAPI) => {
	try {
		const {
			post: { query, page },
		} = thunkAPI.getState();

		const response = await axios.get(
			`${process.env.REACT_APP_API_ENDPOINT}query=${query}&page=${page}`
		);

		const data = response.data;

		if (page > 1000) {
			return thunkAPI.rejectWithValue(
				'you can only fetch the 1000 hits for this query.'
			);
		}

		if (data.hits.length === 0) {
			return thunkAPI.rejectWithValue(`Invalid query : ${query}`);
		}

		return response.data as IReturnedType;
	} catch (error) {
		return thunkAPI.rejectWithValue(error);
	}
});

export { getPostPerPage };
