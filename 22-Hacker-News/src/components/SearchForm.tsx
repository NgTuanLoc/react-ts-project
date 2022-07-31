import { FormEvent } from 'react';
import styled from 'styled-components';
import { AiOutlineSearch } from 'react-icons/ai';

import { useAppDispatch, useAppSelector } from '../app/hooks';
import { searchPost } from '../features/postSlice';
import { getPostPerPage } from '../features/postThunk';

const SearchForm = () => {
	const dispatch = useAppDispatch();
	const { query } = useAppSelector((store) => store.post);

	const onSubmitHandler = (e: FormEvent) => {
		e.preventDefault();
		dispatch(getPostPerPage());
	};

	return (
		<Container>
			<h1>Search Hacker News</h1>
			<form onSubmit={onSubmitHandler}>
				<input
					type='text'
					onChange={(e) => dispatch(searchPost(e.target.value))}
					value={query}
				/>
				<button type='submit'>
					<AiOutlineSearch />
				</button>
			</form>
		</Container>
	);
};

const Container = styled.section`
	form {
		display: flex;
		align-items: center;
		border-bottom: 2px solid #617d98;

		input {
			font-size: 2rem;
			height: 2.5rem;
			border: none;
			padding: 1.5rem 0.5rem;
			background-color: transparent;
		}

		button {
			cursor: pointer;
			font-size: 2rem;
			background-color: transparent;
			border: transparent;
		}
	}
`;

export default SearchForm;
