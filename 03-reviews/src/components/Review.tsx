import React from 'react';
import styled from 'styled-components';
import { IoMdQuote } from 'react-icons/io';
import { FcPrevious, FcNext } from 'react-icons/fc';

export interface ReviewType {
	id: number;
	name: string;
	job: string;
	image: string;
	text: string;
}

export interface ReviewFunction {
	nextPage: () => void;
	prevPage: () => void;
	randomPage: () => void;
}

const Review: React.FC<ReviewType & ReviewFunction> = ({
	name,
	job,
	image,
	text,
	prevPage,
	nextPage,
	randomPage,
}) => {
	return (
		<Wrapper>
			<div className='review__image'>
				<img src={image} alt={name} />
				<span className='review__quote'>
					<IoMdQuote />
				</span>
			</div>
			<h3>{name}</h3>
			<h4>{job}</h4>
			<p>{text}</p>
			<div className='review__btn-page'>
				<button onClick={prevPage}>
					<FcPrevious />
				</button>
				<button onClick={nextPage}>
					<FcNext />
				</button>
			</div>
			<button className='surprise' onClick={randomPage}>
				Surprise me
			</button>
		</Wrapper>
	);
};

const Wrapper = styled.article`
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 3rem 4rem;
	align-items: center;
	margin-top: 8rem;
	min-width: var(--fixed-width);
	background-color: var(--clr-white);
	border-radius: var(--radius);
	.review__image {
		position: relative;
		width: 18rem;
		height: 18rem;
		border-radius: 50%;
		margin: 1rem auto;

		img {
			position: absolute;
			width: 100%;
			height: 100%;
			border-radius: 50%;
			object-fit: cover;
			z-index: 2;
		}
		.review__quote {
			position: absolute;
			font-size: 3rem;
			padding: 1rem;
			z-index: 3;
			display: flex;
			justify-content: center;
			align-items: center;
			color: white;
			background-color: var(--clr-primary);
			border-radius: 50%;
			top: 1rem;
		}
	}
	.review__image::before {
		content: '';
		position: absolute;
		width: 100%;
		height: 100%;
		border-radius: 50%;
		z-index: 1;
		background-color: var(--clr-primary);
		transform: translate(1.2rem, -0.4rem);
	}
	h3 {
		font-size: 3rem;
		letter-spacing: 3px;
		margin-bottom: 0.5rem;
	}
	h4 {
		font-size: 2rem;
		color: var(--clr-primary);
	}
	p {
		text-align: center;
	}
	.review__btn-page {
		margin: 1rem auto;
		button {
			color: #8bcbf9;
			cursor: pointer;
			margin-inline: 1.5rem;
			background: transparent;
			border: transparent;
			font-size: 2.5rem;
			transition: var(--trasition);
		}
		button:hover {
			color: red;
		}
	}
	.surprise {
		background: transparent;
		border: transparent;
		font-size: 1.5rem;
		color: var(--clr-primary);
		background-color: var(--clr-secondary);
		padding: 0.5rem;
		border-radius: var(--radius);
		transition: var(--transition);
		cursor: pointer;
	}
	.surprise:hover {
		color: black;
		background-color: var(--clr-primary);
	}
`;

export default Review;
