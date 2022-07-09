import { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';

import { data } from './data/data';
import styled from 'styled-components';

interface ReviewType {
	id: number;
	image: string;
	name: string;
	title: string;
	quote: string;
}

function App() {
	const [index, setIndex] = useState<number>(0);

	const { image, name, title, quote } = data[index];

	return (
		<Wrapper>
			<h1>Reviews</h1>
			<div className='content'>
				<div className='icon'>
					<FiChevronLeft />
				</div>
				<div className='info'>
					<img src={image} alt={name} />
					<h3>{name}</h3>
					<h4>{title}</h4>
					<p>{quote}</p>
				</div>
				<div className='icon'>
					<FiChevronRight />
				</div>
			</div>
			<div className='quote-icon'>
				<FaQuoteRight />
			</div>
		</Wrapper>
	);
}

const Wrapper = styled.main`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: 8rem auto;
	.content {
		display: flex;
		justify-content: center;
		align-items: center;
		max-width: var(--fixed-width);
		margin-bottom: 3rem;

		.info {
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
			text-align: center;
			img {
				width: 18rem;
				height: 18rem;
				object-fit: cover;
				border-radius: 50%;
				margin-bottom: 1rem;
				border: 10px solid var(--clr-seconday);
			}

			h3 {
				text-transform: uppercase;
				font-size: 1.5rem;
				color: var(--clr-primary);
			}
			h4 {
				font-size: 1.3;
				font-weight: 300;
				letter-spacing: 0;
			}
		}
		.icon {
			display: flex;
			justify-content: center;
			align-items: center;
			padding: 1rem;
			font-size: 2rem;
			color: white;
			background-color: #617d98;
			border-radius: var(--radius);
		}
	}
	.quote-icon {
		font-size: 5rem;
		color: var(--clr-primary);
	}
`;

export default App;
