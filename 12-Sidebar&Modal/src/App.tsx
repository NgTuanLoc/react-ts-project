import styled from 'styled-components';
import { MdOutlineMenu } from 'react-icons/md';

import { useGlobalContext } from './Context';
import Modal from './components/Modal';
import Sidebar from './components/Sidebar';

const App = () => {
	const { toggleSidebar, showModal } = useGlobalContext();

	return (
		<Container>
			<MenuButton>
				<MdOutlineMenu onClick={toggleSidebar} />
			</MenuButton>
			<Sidebar />

			<button className='show-modal-btn' onClick={showModal}>
				Show Modal
			</button>
			<Modal />
		</Container>
	);
};

const Container = styled.main`
	position: relative;
	height: 100vh;
	overflow: hidden;

	.show-modal-btn {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translateX(-50%);
		background-color: black;
		color: white;
		border-radius: var(--radius);
		font-size: 2rem;
		letter-spacing: var(--spacing);
		padding: 1rem 2.5rem;
		border: 1px solid black;
		transition: var(--transition);
		cursor: pointer;

		:hover {
			background-color: white;
			color: black;
		}
	}
`;

const MenuButton = styled.button`
	margin: 3rem;
	background-color: transparent;
	font-size: 4rem;
	border: transparent;
	display: flex;
	justify-content: center;
	align-items: center;
	animation: bounce 2s ease-in-out infinite;
	cursor: pointer;
	color: var(--clr-primary);
`;

export default App;
