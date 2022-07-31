import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	hello: 'hello',
};

const testSlice = createSlice({
	name: 'test',
	initialState,
	reducers: {
		hello: () => {},
	},
});

export default testSlice.reducer;
