import styled from 'styled-components';

import { SearchBar } from '../components';

const Home = () => {
	return (
		<Container>
			<SearchBar />
			<Content>
				<h1>Cocktails Menu</h1>
				<div className='cocktails-center'></div>
			</Content>
		</Container>
	);
};

const Container = styled.section``;

const Content = styled.section``;

export default Home;
