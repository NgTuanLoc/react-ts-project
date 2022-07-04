import axios, { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';

import Tour, { TourType } from './components/Tour';
import Loading from './components/Loading';
import styled from 'styled-components';

const url = 'https://course-api.com/react-tours-project';

function App() {
	const [tours, setTours] = useState<TourType[]>([]);
	const [loading, setLoading] = useState<Boolean>(true);
	const fetchData = async (url: string) => {
		try {
			setLoading(true);
			const response: AxiosResponse<TourType[]> = await axios(url);
			setTours(response.data);
			setLoading(false);
		} catch (error) {
			console.log(error);
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchData(url);
	}, []);

	if (loading) {
		return (
			<Wrapper>
				<Loading />
			</Wrapper>
		);
	}

	return (
		<Wrapper>
			<div className='content'>
				<div className='title'>
					<h1>Our Tours</h1>
					<div className='underline'></div>
				</div>
				{tours.map((tour) => {
					return <Tour key={tour.id} {...tour} />;
				})}
			</div>
		</Wrapper>
	);
}

const Wrapper = styled.main`
	background-color: var(--clr-background);
	width: 90vw;
	max-width: var(--fixed-width);
	margin: 5rem auto;
	text-align: center;
	.content {
		display: flex;
		flex-direction: column;

		.title {
			margin-bottom: 3rem;
		}
		.underline {
			width: 12rem;
			height: 0.25rem;
			margin: 0 auto;
			background-color: var(--clr-primary);
		}
	}
`;

export default App;
