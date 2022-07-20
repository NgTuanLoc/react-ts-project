/* eslint-disable react-hooks/exhaustive-deps */
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { TiTickOutline } from 'react-icons/ti';
import { BsTrash } from 'react-icons/bs';

type alertType = 'alert-active' | 'alert-danger' | '';

interface IAlert {
	msg: string;
	show: boolean;
	type: alertType;
}

const getLocalStorage = () => {
	let groceryList = localStorage.getItem('list');

	if (!groceryList) return [];

	return JSON.parse(groceryList);
};

const App = () => {
	const [value, setValue] = useState('');
	const [list, setList] = useState<string[]>(getLocalStorage());
	const [isEdit, setIsEdit] = useState<boolean>(false);
	const [editId, setEditId] = useState<number>(0);
	const [alert, setAlert] = useState<IAlert>({
		msg: '',
		show: true,
		type: '',
	});

	const clearAll = () => {
		setList([]);
		setAlert({
			msg: 'Clear All Item',
			show: true,
			type: 'alert-danger',
		});
		localStorage.removeItem('list');
	};

	const editItem = (id: number) => {
		return () => {
			setIsEdit(true);
			setEditId(id);
		};
	};

	const removeItem = (id: number) => {
		return () => {
			setAlert({
				msg: 'Item removed',
				show: true,
				type: 'alert-danger',
			});
			const newList = list.filter((_, index) => {
				return index !== id;
			});
			setList(newList);
		};
	};

	const onSubmitHandler = (e: any) => {
		e.preventDefault();

		if (isEdit) {
			const newList = list.map((item, index) => {
				if (index === editId) {
					return value;
				}
				return item;
			});
			setList(newList);
			setIsEdit(false);
			setAlert({
				msg: 'Item changed',
				show: true,
				type: 'alert-active',
			});

			return;
		}

		setAlert({
			msg: 'Item added',
			show: true,
			type: 'alert-active',
		});
		setList([...list, value]);
		setValue('');
	};

	useEffect(() => {
		const timeout = setTimeout(() => {
			setAlert({ ...alert, show: false });
		}, 3000);
		return () => clearTimeout(timeout);
	}, [value]);

	useEffect(() => {
		localStorage.setItem('list', JSON.stringify(list));
	}, [list]);

	return (
		<Container>
			<form onSubmit={onSubmitHandler}>
				{alert.show && <h2 className={`alert ${alert.type}`}>{alert.msg}</h2>}
				<h1>Grocery Bud</h1>
				<div className='form-control'>
					<input
						className='grocery-input'
						type='text'
						name='work'
						id='work'
						value={value}
						placeholder='e.g meet'
						onChange={(e: any) => setValue(e.target.value)}
					/>
					<button className='submit-btn' type='submit'>
						{isEdit ? 'Edit' : 'Submit'}
					</button>
				</div>
			</form>
			<div className='grocery-container'>
				<article className='grocery-list'>
					{list.map((item, id) => {
						return (
							<div className='grocery-item' key={id}>
								<h3>{item}</h3>
								<div className='btn-container'>
									<TiTickOutline
										className='btn-active'
										onClick={editItem(id)}
									/>
									<BsTrash className='btn-delete' onClick={removeItem(id)} />
								</div>
							</div>
						);
					})}
				</article>
			</div>
			{list.length !== 0 && (
				<button onClick={clearAll} className='btn-clear-all' type='button'>
					Clear All !!!
				</button>
			)}
		</Container>
	);
};

const Container = styled.main`
	min-width: 40rem;
	background-color: white;
	box-shadow: var(--dark-shadow);
	width: 95vw;
	max-width: 60rem;
	margin-inline: auto;
	margin-top: 10rem;
	padding: 4rem;
	transition: var(--transition);
	border-radius: var(--radius);

	.alert {
		text-align: center;
		text-transform: capitalize;
		letter-spacing: var(--spacing);
	}
	.alert-active {
		color: #155724;
		background: #d4edda;
	}

	.alert-danger {
		color: #721c24;
		background: #f8d7da;
	}

	.btn-clear-all {
		color: #721c24;
		background: transparent;
		margin: 1rem auto;
		font-size: 2rem;
		border: none;
		width: 100%;
		cursor: pointer;
	}

	form {
		h1 {
			text-align: center;
			margin-bottom: 1rem;
		}
		.form-control {
			display: flex;
			justify-content: center;
			margin-bottom: 1rem;

			.grocery-input {
				flex: 1;
				background-color: #f1f5f8;
				border: none;
				padding: 0.7rem;
				border-top-left-radius: var(--radius);
				border-bottom-left-radius: var(--radius);
				font-size: 2rem;

				:focus {
					outline: none;
					box-shadow: 0px 0px 0px 1px black inset;
				}
			}

			.submit-btn {
				background-color: var(--clr-primary);
				border: none;
				padding: 0.5rem 1.5rem;
				font-size: 2rem;
				font-weight: 500;
				border-top-right-radius: var(--radius);
				border-bottom-right-radius: var(--radius);
				transition: var(--transition);
				letter-spacing: var(--spacing);
				cursor: pointer;

				:hover {
					background-color: #49a6e9;
					color: white;
				}
			}
		}
	}

	.grocery-container {
		.grocery-list {
			.grocery-item {
				display: flex;
				align-items: center;
				margin-bottom: 1rem;

				h3 {
					font-weight: 300;
					flex: 1;
				}
				.btn-active {
					font-size: 2rem;
					color: var(--clr-active);
					margin-inline: 1.5rem;
					cursor: pointer;
				}

				.btn-delete {
					font-size: 2rem;
					color: var(--clr-delete);
					cursor: pointer;
				}
			}
		}
	}
`;

export default App;
