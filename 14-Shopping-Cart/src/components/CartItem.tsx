import styled from 'styled-components';
import { RiArrowUpSLine, RiArrowDownSLine } from 'react-icons/ri';

import { useGlobalContext } from '../context';
import { Product } from '../typing';

const CartItem = ({ id, title, price, img, amount }: Product) => {
	const { toggleAmount, removeItem } = useGlobalContext();

	return (
		<Container>
			<div className='img'>
				<img src={img} alt={title} />
			</div>
			<div className='info'>
				<h4>{title}</h4>
				<p>${price}</p>
				<button onClick={() => removeItem(id)}>remove</button>
			</div>
			<div className='amount'>
				<button onClick={() => toggleAmount({ type: 'inc', id })}>
					<RiArrowUpSLine />
				</button>
				<h4>{amount}</h4>
				<button onClick={() => toggleAmount({ type: 'dec', id })}>
					<RiArrowDownSLine />
				</button>
			</div>
		</Container>
	);
};

const Container = styled.article`
	display: grid;
	grid-template-columns: auto 1fr auto;
	align-items: center;
	margin: 3rem auto;

	.img {
		width: 10rem;
		display: grid;
		place-items: center;
	}

	.info {
		display: flex;
		justify-content: center;
		align-items: flex-start;
		flex-direction: column;

		button {
			font-size: 3rem;
			letter-spacing: var(--spacing);
			color: var(--clr-primary);
		}
	}

	.amount {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;

		button {
			font-size: 3rem;
			color: var(--clr-primary);
		}
	}

	@media only screen and (max-width: 800px) {
		.img {
			width: 6rem;
		}
	}
`;

export default CartItem;
