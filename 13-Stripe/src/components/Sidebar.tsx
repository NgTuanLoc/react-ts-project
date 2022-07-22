import styled from 'styled-components';
import { AiOutlineClose } from 'react-icons/ai';

import { data } from '../data';
import { useGlobalContext } from '../Context';

const Sidebar = () => {
	const { isSidebarOpen, closeSidebar } = useGlobalContext();

	return (
		<Container isSidebarOpen={isSidebarOpen}>
			<aside>
				<button>
					<AiOutlineClose onClick={closeSidebar} />
				</button>
				<div className='sidebar-links'>
					{data.map((data, id) => {
						const { page, links } = data;
						return (
							<article key={id}>
								<h4>{page}</h4>
								<div className='sidebar-link'>
									{links.map((link, id) => {
										const { label, url, icon } = link;
										return (
											<a href={url} key={id}>
												{icon} <p>{label}</p>
											</a>
										);
									})}
								</div>
							</article>
						);
					})}
				</div>
			</aside>
		</Container>
	);
};

interface Props {
	isSidebarOpen: boolean | undefined;
}

const Container = styled.div<Props>`
	position: fixed;
	background: rgba(0, 0, 0, 0.5);
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	transition: var(--transition);
	z-index: 10;
	display: grid;
	place-items: center;
	z-index: 99999;
	transform: ${(props) => (props.isSidebarOpen ? 'scale(1)' : 'scale(0)')};

	.show-sidebar {
		transform: scale(1);
	}

	aside {
		background-color: white;
		border-radius: var(--radius);
		width: 90vw;
		height: 95vh;
		padding: 6rem 3rem;
		position: relative;
		box-shadow: var(--dark-shadow);

		button {
			position: absolute;
			top: 0;
			right: 0;
			margin: 1rem;
			background-color: transparent;
			border: none;
			display: flex;
			justify-content: center;
			align-items: center;
			color: red;
			font-size: 3rem;
			cursor: pointer;
		}

		.sidebar-links article {
			margin-bottom: 2rem;
			h4 {
				margin-bottom: 1rem;
			}
		}

		.sidebar-link {
			display: grid;
			grid-template-columns: 1fr 1fr;
			align-content: center;
			a {
				display: flex;
				align-items: center;
				svg {
					margin-right: 1.5rem;
					font-size: 3rem;
				}

				p {
					margin: 0;
				}
			}
		}
	}

	@media only screen and (min-width: 800px) {
		display: none;
	}
`;

export default Sidebar;
