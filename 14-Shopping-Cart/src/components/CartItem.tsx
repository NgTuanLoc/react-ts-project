import styled from 'styled-components';
import { RiArrowUpSLine, RiArrowDownSLine } from 'react-icons/ri';

interface ICartItem {
	title: string;
	price: number;
	img: string;
	amount: number;
}

const CartItem = ({ title, price, img, amount }: ICartItem) => {
	return (
		<Container>
			<div className='img'>
				<img src={img} alt={title} />
			</div>
			<div className='info'>
				<h4>{title}</h4>
				<p>${price}</p>
				<button>remove</button>
			</div>
			<div className='amount'>
				<button>
					<RiArrowUpSLine />
				</button>
				<h4>{amount}</h4>
				<button>
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
			font-size: 4rem;
			color: var(--clr-primary);
		}
	}
`;

export default CartItem;
