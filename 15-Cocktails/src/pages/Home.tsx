import styled from 'styled-components';

import { SearchBar, Loading, Cocktail } from '../components';
import { useGlobalContext } from '../context';

const Home = () => {
	const { isLoading, cocktails } = useGlobalContext();

	return (
		<Container>
			<SearchBar />
			<Content>
				<h1>Cocktails Menu</h1>
				{isLoading ? (
					<Loading />
				) : (
					<div className='cocktails-center'>
						{cocktails.map((item) => {
							return <Cocktail key={item.id} {...item} />;
						})}
					</div>
				)}
			</Content>
		</Container>
	);
};

const Container = styled.section`
	position: relative;
	min-height: calc(100vh - 8rem);
`;

const Content = styled.section`
	text-align: center;

	.cocktails-center {
		padding: 5rem;
		display: grid;
		width: 90vw;
		max-width: var(--max-width);
		gap: 3rem 3rem;
		margin-inline: auto;
	}

	@media only screen and (min-width: 1100px) {
		.cocktails-center {
			grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
		}
	}
`;

export default Home;
