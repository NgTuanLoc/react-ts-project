/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { FiSearch } from 'react-icons/fi';
import axios from 'axios';

import { IPhoto } from './typing';
import Photo from './Photo';

const App = () => {
	const [photos, setPhotos] = useState<IPhoto[]>([]);
	const [isLoading, setIsLoading] = useState(false);
	const [page, setPage] = useState(1);
	const [newImages, setNewImages] = useState(false);
	const [query, setQuery] = useState('');
	const mounted = useRef<any>(false);

	const fetchData = async () => {
		setIsLoading(true);
		const urlPage = `&page=${page}`;
		const urlQuery = `&query=${query}`;
		const clientId = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`;
		let url = '';

		if (query) {
			url = `${process.env.REACT_APP_SEARCH_DOMAIN}${clientId}${urlPage}${urlQuery}`;
		} else {
			url = `${process.env.REACT_APP_DOMAIN}${clientId}${urlPage}`;
		}

		try {
			const response = await axios.get(url);
			const data = response.data;

			if (page === 1 && query) {
				setPhotos(data.results);
			} else if (query) {
				setPhotos([...photos, ...data.results]);
			} else {
				setPhotos([...photos, ...data]);
			}

			setNewImages(false);
			setIsLoading(false);
		} catch (error) {
			setIsLoading(false);
			setNewImages(false);
			console.log('🚀 ~ file: App.tsx ~ line 15 ~ fetchData ~ error', error);
		}
	};

	useEffect(() => {
		if (!mounted.current) {
			mounted.current = true;
			return;
		}
		fetchData();
	}, [page]);

	useEffect(() => {
		if (!mounted.current) {
			mounted.current = true;
			return;
		}

		if (!newImages) return;
		if (isLoading) return;

		setPage((oldPage) => oldPage + 1);
	}, [isLoading, newImages]);

	const scrollEvent = () => {
		if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 2) {
			setNewImages(true);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', scrollEvent);
		return () => window.removeEventListener('scroll', scrollEvent);
	}, []);

	const onSubmitHandler = (e: any) => {
		e.preventDefault();
		if (!query) return;
		if (page === 1) {
			fetchData();
		}
		setPage(1);
	};

	return (
		<Container>
			<section className='search'>
				<form className='form-container' onSubmit={onSubmitHandler}>
					<input
						type='text'
						placeholder='Search'
						onChange={(e) => setQuery(e.target.value)}
					/>
					<button type='submit'>
						<FiSearch />
					</button>
				</form>
			</section>
			<section className='content'>
				{photos.map((photo) => {
					return <Photo key={photo.id} {...photo} />;
				})}
				{isLoading && <h2 className='loading'>Loading ....</h2>}
			</section>
		</Container>
	);
};

const Container = styled.main`
	width: 90vw;
	max-width: var(--max-width);
	margin-inline: auto;

	.search {
		padding: 5rem 0 0 0;
		width: 90vw;
		max-width: var(--max-width);
		margin: 0 auto;

		.form-container {
			display: flex;
			justify-content: flex-start;
			align-items: center;

			input {
				width: 50rem;
				font-size: 2.5rem;
				border: transparent;
				background-color: transparent;

				:focus {
					outline: none;
				}
			}

			button {
				font-size: 2.5rem;
				border: transparent;
				background-color: transparent;
			}

			input,
			button {
				border-bottom: 3px solid var(--clr-grey-5);
				padding-bottom: 1rem;
			}
		}
	}

	.content {
		margin: 5rem 0;
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
		grid-gap: 2rem 2rem;
		justify-items: center;
	}
`;

export default App;
