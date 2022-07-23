import styled from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Home, Error, SingleProduct, About } from './pages';
import { Navbar } from './components';

const App = () => {
	return (
		<Container>
			<Router>
				<Navbar />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/product/:id' element={<SingleProduct />} />
					<Route path='/about' element={<About />} />
					<Route path='*' element={<Error />} />
				</Routes>
			</Router>
		</Container>
	);
};

const Container = styled.div``;

export default App;
