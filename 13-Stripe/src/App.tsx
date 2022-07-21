import styled from 'styled-components';

import { Navbar, Sidebar, SubMenu, Hero } from './components';

const App = () => {
	return (
		<Container>
			<Navbar />
			<Sidebar />
			<Hero />
			<SubMenu />
		</Container>
	);
};

const Container = styled.main`
	width: 100%;
	background-image: url('./images/hero.svg');
`;

export default App;
