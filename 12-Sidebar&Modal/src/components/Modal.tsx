import styled from 'styled-components';
import { AiOutlineClose } from 'react-icons/ai';

import { useGlobalContext } from '../Context';

function prevent({ fn, defaultOnly }: any) {
	return (e: any, ...params: any) => {
		e && e.preventDefault();
		!defaultOnly && e && e.stopPropagation();
		fn(e, ...params);
	};
}

const Modal = () => {
	const { isModalOpen, hideModal } = useGlobalContext();

	return (
		<Container
			className={`${isModalOpen ? 'show-modal' : ''}`}
			onClick={hideModal}>
			<ModalContent onClick={prevent(() => {})}>
				<CloseButton onClick={hideModal}>
					<AiOutlineClose />
				</CloseButton>
				<h1>Modal Content</h1>
			</ModalContent>
		</Container>
	);
};

const Container = styled.div`
	visibility: hidden;
	position: fixed;
	z-index: 100;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	display: grid;
	place-items: center;
	cursor: pointer;
`;

const ModalContent = styled.article`
	display: grid;
	z-index: 100000;
	position: relative;
	place-items: center;
	background-color: white;
	width: 90vw;
	max-width: 60rem;
	height: 30vh;
	border-radius: var(--radius);
`;

const CloseButton = styled.button`
	position: absolute;
	top: 0;
	right: 0;
	margin: 2rem;
	font-size: 4rem;
	color: red;
	background-color: transparent;
	border: transparent;
	cursor: pointer;
`;

export default Modal;
