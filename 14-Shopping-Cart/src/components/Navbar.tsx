import styled from 'styled-components';
import { AiOutlineShoppingCart } from 'react-icons/ai';

import { useGlobalContext } from '../context';

const Navbar = () => {
	const { totalAmount } = useGlobalContext();

	return (
		<Container>
			<div className='nav-header'>
				<h1>Shopping Cart</h1>
				<button>
					<AiOutlineShoppingCart />
					<div className='total-amount'>
						<h5>{totalAmount}</h5>
					</div>
				</button>
			</div>
		</Container>
	);
};

const Container = styled.nav`
	position: fixed;
	top: 0;
	left: 0;
	background-color: var(--clr-primary);
	width: 100%;
	height: 7rem;
	display: flex;
	justify-content: center;
	align-items: center;

	.nav-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 70vw;
		max-width: var(--max-width);
		h1 {
			font-size: 3rem;
			color: white;
		}

		button {
			cursor: pointer;
			font-size: 5rem;
			display: grid;
			place-items: center;
			background-color: transparent;
			border: transparent;
			color: white;
			position: relative;
			.total-amount {
				z-index: 10;
				width: 2.5rem;
				height: 2.5rem;
				position: absolute;
				top: -15%;
				right: -20%;
				background-color: #85c6f4;
				border-radius: 100%;

				h5 {
					font-size: 2rem;
				}
			}
		}
	}
`;

export default Navbar;
