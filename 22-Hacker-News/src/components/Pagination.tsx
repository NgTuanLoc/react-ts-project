import styled from 'styled-components';

import { useAppDispatch, useAppSelector } from '../app/hooks';
import { previousPage, nextPage } from '../features/postSlice';

const Pagination = () => {
	const { page } = useAppSelector((store) => store.post);
	const dispatch = useAppDispatch();

	return (
		<Container>
			<button onClick={() => dispatch(previousPage())}>prev</button>
			<h4>{page} of 50</h4>
			<button onClick={() => dispatch(nextPage())}>next</button>
		</Container>
	);
};

const Container = styled.div`
	display: flex;
	align-items: center;
	margin: 2rem 0;

	h4 {
		text-transform: lowercase;
		margin-inline: 2rem;
		margin-bottom: 0;
	}

	button {
		color: white;
		font-size: 2rem;
		background-color: var(--clr-primary);
		border: transparent;
		padding: 0.2rem 0.5rem;
		border-radius: var(--radius);
		transition: var(--transition);
		cursor: pointer;

		:hover {
			background-color: #2172ac;
		}
	}
`;

export default Pagination;
