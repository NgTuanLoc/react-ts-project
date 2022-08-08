import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	hello: 'hello',
};

const quizSlice = createSlice({
	name: 'quiz',
	initialState,
	reducers: {
		hello: () => {},
	},
});

export default quizSlice.reducer;
