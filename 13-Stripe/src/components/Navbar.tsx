import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';
import { MouseEvent } from 'react';

import logo from '../images/logo.svg';
import { useGlobalContext } from '../Context';

const Navbar = () => {
	const { openSidebar, showSubMenu, closeSubMenu } = useGlobalContext();

	const onMouseOverHandler = (e: MouseEvent<HTMLButtonElement>) => {
		if (!showSubMenu) {
			return;
		}
		const targetButton = e.target as HTMLElement;

		const tempButton = targetButton.getBoundingClientRect();
		const center = (tempButton.left + tempButton.right) / 2;
		const bottom = tempButton.bottom - 4;
		const page = `${targetButton.textContent}`;

		showSubMenu({ center, bottom }, page);
	};

	const handleSubmenu = (e: MouseEvent<HTMLDivElement>) => {
		const NavTemp = e.target as HTMLElement;
		if (!NavTemp.classList.contains('link-btn')) {
			if (!closeSubMenu) {
				return;
			}
			closeSubMenu();
		}
	};

	return (
		<Container onMouseOver={handleSubmenu}>
			<div className='nav-center'>
				<div className='nav-header'>
					<img src={logo} alt='logo' />
					<button className='btn toggle-btn' onClick={openSidebar}>
						<FaBars />
					</button>
				</div>
				<ul className='nav-links'>
					<li>
						<button className='link-btn' onMouseOver={onMouseOverHandler}>
							projects
						</button>
					</li>
					<li>
						<button className='link-btn' onMouseOver={onMouseOverHandler}>
							solutions
						</button>
					</li>
					<li>
						<button className='link-btn' onMouseOver={onMouseOverHandler}>
							developers
						</button>
					</li>
					<li>
						<button className='link-btn' onMouseOver={onMouseOverHandler}>
							company
						</button>
					</li>
				</ul>
				<button className='btn sign-in-btn'>Sign In</button>
			</div>
		</Container>
	);
};

const Container = styled.nav`
	height: 7rem;
	background-color: transparent;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	z-index: 1;

	.sign-in-btn {
		display: none;
	}

	.nav-center {
		width: 90vw;
		max-width: var(--max-width);
	}

	.nav-header {
		display: flex;
		justify-content: space-between;
		align-items: center;

		img {
			cursor: pointer;
		}
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
				font-size: 2rem;
				color: white;
				text-transform: capitalize;
				letter-spacing: 1px;
				margin-inline: 0.5rem;
				text-transform: capitalize;
			}
		}
	}
`;

export default Navbar;
