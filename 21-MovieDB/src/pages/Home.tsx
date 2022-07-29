/* eslint-disable react-hooks/exhaustive-deps */
import styled from 'styled-components';
import { useEffect, FormEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { IoSearchOutline } from 'react-icons/io5';

import { searchMovie } from '../features/movieSlice';
import { getMovieList } from '../features/movieThunk';
import { MovieList, Loading } from '../components';

const Home = () => {
	const { isLoading, query, error } = useAppSelector((store) => store.movie);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(getMovieList(query));
	}, []);

	const onSubmitHandler = (e: FormEvent) => {
		e.preventDefault();
		dispatch(getMovieList(query));
	};

	return (
		<Container>
			<header>
				<h1>Search Movies</h1>
				<form onSubmit={onSubmitHandler}>
					<input
						type='text'
						value={query}
						onChange={(e) => dispatch(searchMovie(e.target.value))}
					/>
					<button type='submit'>
						<IoSearchOutline />
					</button>
				</form>
				{error.show && <h4 className='error'>{error.msg}</h4>}
			</header>
			{isLoading ? <Loading /> : <MovieList />}
		</Container>
	);
};

const Container = styled.main`
	width: 90vw;
	max-width: var(--max-width);
	margin-inline: auto;

	header {
		margin-top: 2rem;
		margin-bottom: 4rem;

		.error {
			font-size: 2rem;
			font-weight: 300;
			letter-spacing: var(--spacing);
			color: red;
			margin-top: 0.5rem;
		}

		form {
			display: flex;
			justify-content: flex-start;
			align-items: center;
		}
		input {
			width: 100%;
			padding: 0.5rem;
			border: none;
			font-size: 2rem;
			border-radius: var(--radius);
		}

		@media only screen and (min-width: 1200px) {
			width: 30rem;
		}

		svg {
			font-size: 2rem;
			margin-left: 0.1rem;
		}
	}
`;

export default Home;
