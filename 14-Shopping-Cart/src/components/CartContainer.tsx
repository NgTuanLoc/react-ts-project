import styled from 'styled-components';

import { useGlobalContext } from '../context';
import CartItem from './CartItem';

const CartContainer = () => {
	const { products, totalPrice, clearCart } = useGlobalContext();

	return (
		<Container>
			<h1>Your Cart</h1>
			<div className='cart-container'>
				{products.map((item) => {
					return <CartItem key={item.id} {...item} />;
				})}
			</div>
			<div className='total'>
				<div className='result'>
					<h4>Total</h4>
					<h4>${totalPrice}</h4>
				</div>
				<button onClick={() => clearCart()}>Clear Cart</button>
			</div>
		</Container>
	);
};

const Container = styled.section`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	width: 80vw;
	max-width: var(--max-width);
	margin-bottom: 2rem;

	.cart-container {
		width: 100%;
	}

	.total {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		width: 100%;
		border-top: 2px solid var(--clr-primary);

		.result {
			display: flex;
			justify-content: space-between;
			align-items: center;
			width: 100%;
			margin: 3rem auto;
		}

		button {
			color: #bb2525;
			border: 2px solid #e66b6b;
			padding: 1rem 5rem;
			border-radius: 5px;
			box-shadow: var(--dark-shadow);
			transition: var(--transition);

			:hover {
				background-color: #e66b6b;
			}
		}
	}
`;

export default CartContainer;
