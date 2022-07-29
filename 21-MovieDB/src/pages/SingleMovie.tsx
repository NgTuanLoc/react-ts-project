import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';

import { useAppDispatch, useAppSelector } from '../app/hooks';
import { getMovieInfo } from '../features/movieThunk';
import { Loading } from '../components';

const SingleMovie = () => {
	const { id } = useParams();
	const { movieInfo, isLoading } = useAppSelector((store) => store.movie);
	const dispatch = useAppDispatch();

	useEffect(() => {
		if (!id) {
			return;
		}
		dispatch(getMovieInfo(id));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [id]);

	const { Title, Plot, Poster, Year } = movieInfo;

	if (isLoading) {
		return <Loading />;
	}

	return (
		<Container>
			<img src={Poster} alt={Title} />
			<div className='info'>
				<h2>{Title}</h2>
				<p>{Plot}</p>
				<h4>{Year}</h4>

				<Link className='btn' to='/'>
					Back To Movies
				</Link>
			</div>
		</Container>
	);
};

const Container = styled.main`
	display: grid;
	grid-template-columns: 1fr;
	gap: 2rem;
	padding: 5rem;

	img {
		border-radius: var(--radius);
		margin-bottom: 3rem;
		object-fit: cover;
		width: 100%;
	}

	@media only screen and (min-width: 1200px) {
		grid-template-columns: 1fr 2fr;
	}

	.info {
		p {
			max-width: 35em;
			font-size: 1.2rem;
			margin-top: 1.5rem;
			line-height: 1.8;
			color: #324d67;
		}

		h4 {
			font-size: 1.5rem;
		}

		.btn {
			background-color: #49a6e9;
			font-size: 2rem;
			padding: 0.5rem 1.5rem;
			border-radius: var(--radius);
			color: white;
			transition: var(--transition);

			:hover {
				background-color: #18547e;
			}
		}
	}
`;

export default SingleMovie;
