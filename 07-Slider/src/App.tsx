import { useIndex } from './useIndex';
import styled from 'styled-components';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { useEffect } from 'react';

import { data } from './data/data';
import SingleInfo from './SingleInfo';

function App() {
	const [index, preIndex, nextIndex, setMyIndex] = useIndex(0, data.length - 1);

	useEffect(() => {
		console.log(index);
	}, [index]);

	return (
		<Wrapper>
			<h1>Reviews</h1>
			<Container>
				<Icon
					onClick={() => {
						setMyIndex(index - 1);
					}}>
					<FiChevronLeft />
				</Icon>
				<SingleInfo {...data[index - 1]} />
				<Icon
					onClick={() => {
						setMyIndex(index + 1);
					}}>
					<FiChevronRight />
				</Icon>
			</Container>
		</Wrapper>
	);
}

const Wrapper = styled.main`
	display: flex;
	flex-direction: column;
	height: 100vh;
	justify-content: center;
	align-items: center;
	margin: 0 auto;
`;

const Container = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 4rem;
`;

const Icon = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 1rem;
	font-size: 2rem;
	color: white;
	background-color: #617d98;
	border-radius: var(--radius);
	cursor: pointer;
`;

export default App;
