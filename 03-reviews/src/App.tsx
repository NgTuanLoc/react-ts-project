import styled from 'styled-components';
import { useState, useEffect } from 'react';

import Review, { ReviewType } from './components/Review';
import { data } from './data/data';

function App() {
	const [index, setIndex] = useState<number>(0);
	const [review, setReview] = useState<ReviewType>(data[index]);

	const nextPage = () => {
		setIndex((oldIndex) => {
			const newIndex = oldIndex + 1;
			if (newIndex > data.length - 1) return 0;
			return newIndex;
		});
	};

	const prePage = () => {
		setIndex((oldIndex) => {
			const newIndex = oldIndex - 1;
			if (newIndex < 0) return data.length - 1;
			return newIndex;
		});
	};

	const randomPage = () => {
		const random = Math.floor(Math.random() * data.length);
		setIndex(random);
	};
	useEffect(() => {
		setReview(data[index]);
	}, [index]);

	return (
		<Wrapper>
			<div className='title'>
				<h1>Our reviews</h1>
				<div className='underline'></div>
			</div>
			<Review
				{...review}
				nextPage={nextPage}
				prevPage={prePage}
				randomPage={randomPage}
			/>
		</Wrapper>
	);
}

const Wrapper = styled.main`
	width: 80vw;
	max-width: var(--fixed-width);
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	margin: 8rem auto;

	.title {
		text-align: center;
	}
	h1 {
		text-transform: uppercase;
		font-size: 3rem;
		letter-spacing: 3px;
		margin-bottom: 1rem;
	}
	.underline {
		background-color: var(--clr-primary);
		width: 15rem;
		height: 5px;
		margin-inline: auto;
	}
`;

export default App;
