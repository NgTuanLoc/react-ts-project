import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { ICocktail } from '../typing';

const Cocktail = ({ id, name, image, info, glass }: ICocktail) => {
	return (
		<Container>
			<div className='img-container'>
				<img src={image} alt={name} />
			</div>
			<div className='info'>
				<h3>{name}</h3>
				<h5>{glass}</h5>
				<p>{info}</p>
				<button>
					<Link to={`/product/${id}`}>Details</Link>
				</button>
			</div>
		</Container>
	);
};

const Container = styled.article`
	background-color: white;
	display: grid;
	grid-template-rows: auto 1fr;
	box-shadow: var(--light-shadow);
	border-radius: var(--radius);
	transition: var(--transition);

	:hover {
		box-shadow: var(--dark-shadow);
	}

	.img-container {
		border-top-left-radius: var(--radius);
		border-top-right-radius: var(--radius);
		img {
			border-top-left-radius: var(--radius);
			border-top-right-radius: var(--radius);
			width: 100%;
			object-fit: cover;
		}
	}

	.info {
		padding: 2rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;

		h5 {
			font-size: 2rem;
			letter-spacing: 8px;
		}

		p {
			font-size: 1.5rem;
			letter-spacing: 2px;
			font-weight: 200;
			margin-bottom: 2rem;
		}
		button {
			background-color: var(--clr-primary);
			border-radius: var(--radius);
			padding: 1rem 1.5rem;
			display: grid;
			place-items: center;
			transition: var(--transition);
			cursor: pointer;

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
	}
`;

export default Cocktail;
