import { useGlobalContext } from './context';

import { Loading, Navbar } from './components';
import styled from 'styled-components';

const App = () => {
	const { isLoading } = useGlobalContext();
	console.log(isLoading);

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
		</Container>
	);
};

const Container = styled.main`
	position: relative;
	min-height: 100vh;
`;

export default App;
