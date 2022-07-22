import styled from 'styled-components';
import { useRef, useEffect } from 'react';

import { useGlobalContext } from '../Context';

const SubMenu = () => {
	const { location, page, isSubMenuOpen } = useGlobalContext();
	const containerRef = useRef<HTMLElement | null>(null);

	useEffect(() => {
		const tempSubMenu = containerRef.current;
		if (!tempSubMenu) return;
		if (!location) return;
		tempSubMenu.style.left = `${location?.center}px`;

		tempSubMenu.style.top = `${location?.bottom}px`;
	}, [location, page, isSubMenuOpen]);

	return (
		<Container className={`${isSubMenuOpen && 'show'}`} ref={containerRef}>
			<h4>{page?.page}</h4>
			<div className='links'>
				{page?.links.map((link, id) => {
					const { url, icon, label } = link;
					return (
						<a href={url} key={id}>
							{icon} <p>{label}</p>
						</a>
					);
				})}
			</div>
		</Container>
	);
};

const Container = styled.article`
	display: block;
	visibility: hidden;
	background: white;
	box-shadow: var(--dark-shadow);
	position: absolute;
	top: 5.5rem;
	left: 50%;
	transform: translateX(-50%);
	z-index: 3;
	padding: 2rem;
	border-radius: var(--radius);
	transition: var(--transition);
	width: auto;

	::before {
		content: '';
		display: block;
		width: 0;
		height: 0;
		border-left: 5px solid transparent;
		border-right: 5px solid transparent;
		border-bottom: 5px solid var(--clr-white);
		position: absolute;
		top: -5px;
		left: 50%;
		transform: translateX(-50%);
	}

	.links {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		flex-wrap: wrap;
		margin-top: 2rem;
		a {
			display: flex;
			align-items: center;
			margin-inline: 2.5rem;
			svg {
				margin-right: 1.5rem;
				font-size: 2rem;
			}

			p {
				margin: 0;
			}
		}
	}
`;

export default SubMenu;
