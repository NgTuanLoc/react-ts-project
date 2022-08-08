import { RingLoader } from 'react-spinners';
import styled from 'styled-components';

const Loading = () => {
	return (
		<Container>
			<RingLoader color='#1ea7fd' size={70} />
		</Container>
	);
};

const Container = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	z-index: 9999999;
	transform: translateX(-50%);
`;

export default Loading;
