import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

import { Home, SingleMovie } from './pages';

function App() {
	return (
		<Container>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/:id' element={<SingleMovie />} />
			</Routes>
		</Container>
	);
}

const Container = styled(Router)``;

export default App;
