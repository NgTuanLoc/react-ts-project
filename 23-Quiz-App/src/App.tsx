import styled from 'styled-components';

import { useAppSelector } from './app/hooks';
import { Form, Modal, Quiz } from './components';

function App() {
	const { quizList, selectedQuiz, isModalOpen } = useAppSelector(
		(store) => store.quiz
	);

	const quizDetail = quizList[selectedQuiz];

	return (
		<Container className='App'>
			{quizList.length === 0 ? <Form /> : <Quiz {...quizDetail} />}
			{isModalOpen && <Modal />}
		</Container>
	);
}

const Container = styled.main`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
`;

export default App;
