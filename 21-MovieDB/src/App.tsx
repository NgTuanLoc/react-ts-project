import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

import { Home, SingleMovie, Error } from './pages';

function App() {
	return (
		<Container>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/movie/:id' element={<SingleMovie />} />
				<Route path='*' element={<Error />} />
			</Routes>
		</Container>
	);
}

const Container = styled(Router)``;

export default App;
