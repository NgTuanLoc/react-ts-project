import { useEffect } from 'react';
import styled from 'styled-components';

import { Loading, Pagination, PostContainer, SearchForm } from './components';
import { getPostPerPage } from './features/postThunk';
import { useAppDispatch, useAppSelector } from './app/hooks';

function App() {
	const dispatch = useAppDispatch();
	const { isLoading, page } = useAppSelector((store) => store.post);

	useEffect(() => {
		dispatch(getPostPerPage());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [page]);

	return (
		<Container>
			<SearchForm />
			<Pagination />
			{isLoading ? <Loading /> : <PostContainer />}
		</Container>
	);
}

const Container = styled.main`
	padding: 4rem 3rem;
	width: 90vw;
	max-width: var(--max-width);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	margin-inline: auto;
`;

export default App;
