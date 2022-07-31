import { useEffect } from 'react';
import styled from 'styled-components';

import { Pagination, PostContainer, SearchForm } from './components';
import { getPostPerPage } from './features/postThunk';
import { useAppDispatch } from './app/hooks';

function App() {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(getPostPerPage());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Container>
			<SearchForm />
			<Pagination />
			<PostContainer />
		</Container>
	);
}

const Container = styled.main`
	padding: 4rem 3rem;
	width: 90vw;
	max-width: var(--max-width);
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
`;

export default App;
