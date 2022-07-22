import { PacmanLoader } from 'react-spinners';
import styled from 'styled-components';

const Loading = () => {
	return (
		<Container>
			<PacmanLoader color='#2680c0' size={50} />
		</Container>
	);
};

const Container = styled.div`
	position: fixed;
	z-index: 99999;
	display: flex;
	justify-content: center;
	align-items: center;
	top: 50%;
	left: 50%;
	transform: translateX(-100%);
`;

export default Loading;
