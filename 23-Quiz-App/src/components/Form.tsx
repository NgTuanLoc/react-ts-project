import { useForm } from 'react-hook-form';
import styled from 'styled-components';

import { quizThunk } from '../features/quizThunk';
import { queryQuizForm, table } from '../features/quizSlice';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import Button from './Button';
import Loading from './Loading';
import { IApiEndpoint } from '../typing';

const Form = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IApiEndpoint>();
	const dispatch = useAppDispatch();
	const { isLoading } = useAppSelector((store) => store.quiz);

	const onSubmit = (data: IApiEndpoint) => {
		dispatch(queryQuizForm(data));
		dispatch(quizThunk());
	};

	if (isLoading) {
		return <Loading />;
	}

	return (
		<Container onSubmit={handleSubmit(onSubmit)}>
			<h3>Quiz App</h3>

			<div className='form-control'>
				<label htmlFor='amount'>Number Of Question</label>
				<input
					id='amount'
					type='number'
					placeholder='amount'
					{...register('amount', { required: true, max: 50, min: 0 })}
					defaultValue={10}
				/>
			</div>

			<div className='form-control'>
				<label htmlFor='category'>Category</label>
				<select id='category' {...register('category', { required: true })}>
					<option value={table['sports']}>sports</option>
					<option value={table['history']}>history</option>
					<option value={table['politics']}>politics</option>
				</select>
			</div>

			<div className='form-control'>
				<label htmlFor='difficulty'>Difficulty</label>
				<select id='difficulty' {...register('difficulty', { required: true })}>
					<option value='easy'>easy</option>
					<option value='medium'>medium</option>
					<option value='hard'>hard</option>
				</select>
			</div>

			<Button className='btn-quiz' type='submit'>
				Submit
			</Button>
		</Container>
	);
};

const Container = styled.form`
	position: relative;
	background-color: white;
	border-radius: var(--radius);
	padding: 2rem;
	box-shadow: var(--dark-shadow);

	.form-control {
		display: flex;
		align-items: flex-start;
		flex-direction: column;
		margin: 1rem 0;
		label {
			font-size: 1.5rem;
			font-weight: 500;
			margin-bottom: 0.5rem;
		}

		input,
		select {
			background-color: var(--clr-background);
			width: 100%;
			padding: 0.25rem 0.5rem;
			font-size: 1.5rem;
			border-radius: var(--radius);
			border: transparent;
		}
	}

	h4 {
		margin: 0;
	}
`;

export default Form;
