import { useGlobalContext } from './context';

import { Loading, Navbar, CartContainer } from './components';
import styled from 'styled-components';

const App = () => {
	const { isLoading } = useGlobalContext();

	if (isLoading) {
		return (
			<Container>
				<Loading />
			</Container>
		);
	}

	return (
		<Container>
			<Navbar />
			<CartContainer />
		</Container>
	);
};

const Container = styled.main`
	position: relative;
	min-height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export default App;
