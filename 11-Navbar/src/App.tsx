import { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import {
	RiFacebookBoxFill,
	RiInstagramFill,
	RiGithubFill,
	RiLinkedinFill,
} from 'react-icons/ri';

import { AiOutlineMenu } from 'react-icons/ai';

import logo from './logo.svg';
import Sidebar from './Sidebar';

const App = () => {
	const [showSidebar, setShowSidebar] = useState(false);
	const linksContainerRef = useRef<any>(null);
	const linksRef = useRef<any>(null);

	const toggleSidebar = () => {
		setShowSidebar(!showSidebar);
	};

	useEffect(() => {
		const linksHeight = linksRef.current.getBoundingClientRect().height;

		if (showSidebar) {
			linksContainerRef.current.style.height = `${linksHeight}px`;
		} else {
			linksContainerRef.current.style.height = '0px';
		}
	}, [showSidebar]);

	return (
		<Container>
			<div className='nav-header'>
				<img src={logo} alt='logo' />
				<button
					type='button'
					className={`nav-toggle ${showSidebar && 'active'}`}
					onClick={toggleSidebar}>
					<AiOutlineMenu />
				</button>
			</div>

			<Sidebar linksContainerRef={linksContainerRef} linksRef={linksRef} />
			<SocialContainer>
				<li>
					<a href='https://github.com/'>
						<RiFacebookBoxFill />
					</a>
				</li>
				<li>
					<a href='https://github.com/'>
						<RiInstagramFill />
					</a>
				</li>
				<li>
					<a href='https://github.com/'>
						<RiGithubFill />
					</a>
				</li>
				<li>
					<a href='https://github.com/'>
						<RiLinkedinFill />
					</a>
				</li>
			</SocialContainer>
		</Container>
	);
};

const Container = styled.nav`
	background-color: white;
	padding: 1.5rem 2rem;
	box-shadow: var(--dark-shadow);

	.nav-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.nav-toggle {
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 2.5rem;
		color: #49a6e9;
		background-color: transparent;
		border: transparent;
		transition: var(--transition);
		cursor: pointer;

		:hover {
			color: black;
			transform: rotate(90deg);
		}
	}

	.active {
		color: black;
		transform: rotate(90deg);
	}

	@media only screen and (min-width: 800px) {
		display: flex;
		justify-content: space-between;
		align-items: center;
		.nav-toggle {
			display: none;
		}
	}
`;

const SocialContainer = styled.ul`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	li {
		margin-inline: 0.5rem;
		svg {
			transition: var(--transition);
			color: var(--clr-primary);
		}

		:hover svg {
			color: #8bcbf9;
		}
	}

	@media only screen and (max-width: 800px) {
		display: none;
	}
`;

export default App;
