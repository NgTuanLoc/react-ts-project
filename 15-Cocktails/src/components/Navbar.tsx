import styled from 'styled-components';
import { Link } from 'react-router-dom';

import logo from '../logo.svg';

const Navbar = () => {
	return (
		<Container>
			<div className='nav-center'>
				<Link to='/'>
					<img className='logo' src={logo} alt='logo' />
				</Link>
				<ul className='nav-links'>
					<li>
						<Link to='/'>Home</Link>
					</li>
					<li>
						<Link to='/about'>About</Link>
					</li>
				</ul>
			</div>
		</Container>
	);
};

const Container = styled.nav`
	display: flex;
	align-items: center;
	background-color: white;
	border-bottom: 2px solid var(--clr-primary);
	height: 8rem;
	box-shadow: var(--light-shadow);

	.nav-center {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 90vw;
		max-width: var(--max-width);
		margin: 0 auto;

		a {
			margin: 0;
		}

		.logo {
			display: block;
			width: 20rem;
		}

		.nav-links {
			display: flex;
			justify-content: space-around;
			align-items: center;

			a {
				margin-inline: 2rem;
				transition: var(--transition);
				color: black;

				:hover {
					color: var(--clr-primary);
				}
			}
		}
	}
`;

export default Navbar;
