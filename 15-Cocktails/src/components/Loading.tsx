import { ClockLoader } from 'react-spinners';
import styled from 'styled-components';

const Loading = () => {
	return (
		<Container>
			<ClockLoader color='#476a2e' size={100} />
		</Container>
	);
};

const Container = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translateX(-50%);
`;

export default Loading;
