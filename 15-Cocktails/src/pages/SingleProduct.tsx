/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

import { ICocktailInfo } from '../typing';
import { Loading } from '../components';

const SingleProduct = () => {
	const { id } = useParams();
	const [cocktail, setCocktail] = useState<ICocktailInfo | null>(null);
	const [isLoading, setIsLoading] = useState(false);

	const fetchCocktailData = async () => {
		try {
			setIsLoading(true);
			const response = await axios.get(
				`${process.env.REACT_APP_SEARCH_DOMAIN}${id}`
			);
			if (response.data.drinks) {
				const {
					strDrink: name,
					strDrinkThumb: image,
					strAlcoholic: info,
					strCategory: category,
					strGlass: glass,
					strInstructions: instructions,
					strIngredient1,
					strIngredient2,
					strIngredient3,
					strIngredient4,
					strIngredient5,
				} = response.data.drinks[0];
				const ingredients = [
					strIngredient1,
					strIngredient2,
					strIngredient3,
					strIngredient4,
					strIngredient5,
				];
				const newCocktail = {
					name,
					image,
					info,
					category,
					glass,
					instructions,
					ingredients,
				};
				setCocktail(newCocktail);
				setIsLoading(false);
			} else {
				setIsLoading(false);
				setCocktail(null);
			}
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchCocktailData();
	}, []);

	if (isLoading) {
		return (
			<Container>
				<Loading />
			</Container>
		);
	}

	if (!cocktail) return <h2 className='warning'>no cocktail to display</h2>;

	const { name, image, category, info, glass, instructions, ingredients } =
		cocktail;

	return (
		<Container>
			<button>
				<Link to='/'>Back To Home</Link>
			</button>
			<h1>{name}</h1>
			<div className='content'>
				<div className='img-container'>
					<img src={image} alt={name} />
				</div>
				<div className='drink-info'>
					<p>
						<span className='drink-data'>name :</span> {name}
					</p>
					<p>
						<span className='drink-data'>category :</span> {category}
					</p>
					<p>
						<span className='drink-data'>info :</span> {info}
					</p>
					<p>
						<span className='drink-data'>glass :</span> {glass}
					</p>
					<p>
						<span className='drink-data'>instructions :</span> {instructions}
					</p>
					<p>
						<span className='drink-data'>ingredients :</span>
						{ingredients.map((item, index) => {
							return item ? <span key={index}> {item}</span> : null;
						})}
					</p>
				</div>
			</div>
		</Container>
	);
};

const Container = styled.section`
	position: relative;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	flex-direction: column;
	padding-inline: 5rem;

	.warning {
		margin-top: 3rem;
	}

	.content {
		width: 90vw;
		max-width: var(--max-width);
		margin: 0 auto;
		text-align: left;

		@media only screen and (min-width: 1100px) {
			display: grid;
			grid-template-columns: 2fr 3fr;
			gap: 2rem;
		}

		.img-container {
			text-align: center;
			border-radius: var(--radius);
			img {
				width: 50rem;
				border-radius: var(--radius);
			}
		}

		.drink-data {
			background: var(--clr-primary-light);
			padding: 0.25rem 1rem;
			border-radius: var(--radius);
			color: var(--clr-primary);
			line-height: 0;
		}
		.drink-info {
			padding-top: 2rem;
			display: flex;
			justify-content: flex-start;
			align-items: flex-start;
			flex-direction: column;

			p {
				margin: 1.5rem 0;
			}
		}
	}

	button {
		background-color: var(--clr-primary);
		border-radius: var(--radius);
		padding: 1rem 1.5rem;
		display: grid;
		place-items: center;
		transition: var(--transition);
		height: 5rem;
		cursor: pointer;
		margin: 5rem auto;

		a {
			color: white;
			letter-spacing: 5px;
			margin: 0;
		}

		:hover {
			background-color: var(--clr-primary-light);

			a {
				color: var(--clr-primary);
			}
		}
	}
`;

export default SingleProduct;
