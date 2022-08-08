import styled from 'styled-components';

import { useAppDispatch, useAppSelector } from '../app/hooks';
import { closeModal } from '../features/quizSlice';
import Button from './Button';

const Modal = () => {
	const { correctAnswer, quizList } = useAppSelector((store) => store.quiz);
	const dispatch = useAppDispatch();

	return (
		<Container>
			<div className='card'>
				<h3>Congrats</h3>
				<h5>
					You answered {correctAnswer} of {quizList.length} questions correctly
				</h5>
				<Button
					onClickHandler={() => dispatch(closeModal())}
					type='button'
					className='btn-quiz'>
					Play Again
				</Button>
			</div>
		</Container>
	);
};

const Container = styled.article`
	position: fixed;
	z-index: 9999999;
	width: 100vw;
	height: 100vh;
	background: rgba(0, 0, 0, 0.75);
	display: flex;
	justify-content: center;
	align-items: center;

	.card {
		background-color: white;
		padding: 2rem;
		border-radius: var(--radius);
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}

	button {
		width: 15rem;
	}
`;

export default Modal;
