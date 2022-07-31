import styled from 'styled-components';

const SearchForm = () => {
	return (
		<Container>
			<h1>Search Hacker News</h1>
			<form>
				<input type='text' />
			</form>
		</Container>
	);
};

const Container = styled.section`
	input {
		font-size: 2rem;
		height: 2.5rem;
		border: none;
		padding: 1rem 0.5rem;
	}
`;

export default SearchForm;
