import styled from 'styled-components';
import { Form } from './components';

function App() {
	return (
		<Container className='App'>
			<Form />
		</Container>
	);
}

const Container = styled.main`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
`;

export default App;
