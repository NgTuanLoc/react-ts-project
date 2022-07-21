import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';

import logo from '../images/logo.svg';

const Navbar = () => {
	return (
		<Container>
			<div className='nav-center'>
				<div className='nav-header'>
					<img src={logo} alt='logo' />
					<button className='btn toggle-btn'>
						<FaBars />
					</button>
				</div>
				<ul className='nav-links'>
					<li>
						<button className='link-btn'>Projects</button>
					</li>
					<li>
						<button className='link-btn'>Solutions</button>
					</li>
					<li>
						<button className='link-btn'>Developers</button>
					</li>
					<li>
						<button className='link-btn'>Company</button>
					</li>
				</ul>
				<button className='btn sign-in-btn'>Sign In</button>
			</div>
		</Container>
	);
};

const Container = styled.nav`
	height: 5rem;
	background-color: transparent;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;

	.nav-center {
		width: 90vw;
		max-width: var(--max-width);
	}

	.nav-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.nav-links {
		display: none;
	}

	@media only screen and (min-width: 800px) {
		.toggle-btn {
			display: none;
		}

		.nav-center {
			display: grid;
			align-items: center;
			grid-template-columns: auto 1fr auto;
		}

		.sign-in-btn {
			display: inline-block;
		}

		.nav-links {
			display: block;
			justify-self: center;
			display: grid;
			grid-template-columns: repeat(4, 1fr);
			text-align: center;
			height: 100%;
			display: grid;
			align-items: center;
			li {
				height: 100%;
			}
			.link-btn {
				height: 100%;
				background: transparent;
				border-color: transparent;
				font-size: 2.5rem;
				color: white;
				text-transform: capitalize;
				letter-spacing: 1px;
			}
		}
	}
`;

export default Navbar;
