import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	hello: 'hello',
};

const postSlice = createSlice({
	name: 'post',
	initialState,
	reducers: {
		hello: () => {},
	},
});

export default postSlice.reducer;

// `${API_ENDPOINT}query=${state.query}&page=${state.page}`
