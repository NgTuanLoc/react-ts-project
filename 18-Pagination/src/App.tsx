import styled from 'styled-components';

const App = () => {
	return <Container>App</Container>;
};

const Container = styled.main`
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 3rem;
`;

export default App;
