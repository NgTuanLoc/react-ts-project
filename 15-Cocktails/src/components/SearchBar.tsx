import styled from 'styled-components';

import { useGlobalContext } from '../context';

const SearchBar = () => {
	const { setSearchTerm } = useGlobalContext();

	return (
		<Container>
			<form className='form-search'>
				<h4>search your favorite cocktail</h4>
				<input
					type='text'
					name='input'
					id='input'
					onChange={(e) => setSearchTerm(e.target.value)}
				/>
			</form>
		</Container>
	);
};

const Container = styled.section`
	padding: 5rem;

	.form-search {
		width: 85vw;
		max-width: 70rem;
		background-color: white;
		box-shadow: var(--light-shadow);
		border-radius: var(--radius);
		padding: 2rem 5rem;
		margin: 0 auto;

		input {
			background-color: var(--clr-background);
			border: transparent;
			font-size: 3rem;
			width: 100%;
			padding: 1rem;
		}

		h4 {
			letter-spacing: 5px;
			color: var(--clr-primary);
			margin-bottom: 1rem;
		}
	}
`;

export default SearchBar;
