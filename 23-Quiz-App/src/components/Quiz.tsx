/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import styled from 'styled-components';

import { IQuestion } from '../typing';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { nextQuiz, openModal, checkAnswer } from '../features/quizSlice';
import Button from './Button';

const Quiz = ({ question, correct_answer, incorrect_answers }: IQuestion) => {
	const { selectedQuiz, quizList, correctAnswer } = useAppSelector(
		(store) => store.quiz
	);
	const answers = [...incorrect_answers, correct_answer];
	const dispatch = useAppDispatch();

	const onClickAnswer = (answer: string) => {
		dispatch(checkAnswer(answer === correct_answer));
		dispatch(nextQuiz());
	};

	useEffect(() => {
		if (selectedQuiz === quizList.length - 1) {
			dispatch(openModal());
		}
	}, [selectedQuiz]);

	return (
		<Container>
			<h5 className='result'>
				Correct answer {correctAnswer}/{quizList.length}
			</h5>
			<h4>{question}</h4>
			<div className='container'>
				{answers.map((answer, id) => {
					return (
						<Button
							className='btn-answer'
							type='button'
							key={id}
							onClickHandler={() => onClickAnswer(answer)}>
							{answer}
						</Button>
					);
				})}
				<Button className='btn-quiz' type='button'>
					Next Question
				</Button>
			</div>
		</Container>
	);
};

const Container = styled.article`
	max-width: var(--max-width);
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	background-color: white;
	border-radius: var(--radius);
	padding: 3rem;
	position: relative;

	h4 {
		margin-bottom: 1rem;
	}

	.result {
		position: absolute;
		top: 0.5rem;
		right: 0.5rem;
		color: #25bb32;
	}

	.container {
		width: 80%;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}
`;

export default Quiz;
