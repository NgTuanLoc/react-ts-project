import React from 'react';
import styled from 'styled-components';

export interface FoodType {
	id: number;
	title: string;
	category: string;
	price: number;
	img: string;
	desc: string;
}

const Food: React.FC<FoodType> = ({ title, price, img, desc }) => {
	return (
		<Wrapper>
			<img src={img} alt={title} />
			<div className='info'>
				<header>
					<h3>{title}</h3>
					<h4>{price}</h4>
				</header>
				<p>{desc}</p>
			</div>
		</Wrapper>
	);
};

const Wrapper = styled.article`
	display: grid;
	grid-template-columns: 20rem 1fr;
	grid-gap: 2rem;
	margin-bottom: 2rem;
	img {
		width: 100%;
		height: 150px;
		object-fit: cover;
		border: 6px solid var(--clr-primary);
		border-radius: var(--radius);
	}
	@media only screen and (max-width: 1200px) {
		img {
			height: 200px;
		}
	}
	header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-bottom: 1px dotted #617d98;
		margin-bottom: 1rem;

		h3 {
			font-size: 2rem;
		}
		h4 {
			font-size: 1.8rem;
			color: var(--clr-primary);
		}
	}
`;

export default Food;
