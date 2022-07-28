import styled from 'styled-components';

const Error = () => {
	return (
		<Container>
			<h1>404 Error, Not Found !!!</h1>
		</Container>
	);
};

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: 100vh;

	h1 {
		color: red;
	}
`;

export default Error;
