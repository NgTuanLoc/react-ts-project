import { useState, useEffect } from 'react';
import styled from 'styled-components';

import { IUser } from './typing';
import { useFetch } from './useFetch';
import { data } from './data';
import { paginate } from './utils';
import User from './User';

const App = () => {
	const { users: arrayOfUsers, isLoading } = useFetch();

	const [users, setUsers] = useState<IUser[]>([]);
	const [page, setPage] = useState(0);

	useEffect(() => {
		if (isLoading || arrayOfUsers.length === 0) {
			return;
		}

		setUsers(arrayOfUsers[page]);
	}, [page, isLoading, arrayOfUsers]);

	const handlePage = (value: number) => {
		return (e: any) => setPage(value);
	};

	const prevPage = () => {
		setPage((oldPage) => {
			const newPage = oldPage - 1;

			if (newPage < 0) return arrayOfUsers.length - 1;
			return newPage;
		});
	};

	const nextPage = () => {
		setPage((oldPage) => {
			const newPage = oldPage + 1;

			if (newPage > arrayOfUsers.length - 1) return 0;
			return newPage;
		});
	};

	if (isLoading) return <h1>Loading</h1>;

	return (
		<Container>
			<h1>Pagination</h1>
			<div className='underline'></div>
			<div className='container'>
				{users.map((item) => {
					return <User key={item.id} {...item} />;
				})}
			</div>
			<div className='btn-container'>
				<button className='prev' onClick={prevPage}>
					Prev
				</button>
				{arrayOfUsers.map((_, index) => {
					return (
						<button
							onClick={handlePage(index)}
							className={`page ${index === page && 'active'}`}>
							{index + 1}
						</button>
					);
				})}
				<button className='next' onClick={nextPage}>
					Next
				</button>
			</div>
		</Container>
	);
};

const Container = styled.main`
	padding: 4rem;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	.container {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
		gap: 3rem 3rem;
		width: 90vw;
		max-width: var(--max-width);
		margin-bottom: 3rem;
	}

	.btn-container {
		display: flex;
		justify-content: center;
		align-items: center;

		.next,
		.prev {
			background-color: transparent;
			border: transparent;
			font-size: 2rem;
			font-weight: bold;
		}

		.page {
			border: transparent;
			background-color: #8bcbf9;
			padding: 1rem 1.5rem;
			border-radius: 5px;
			margin-inline: 0.75rem;
			font-size: 1.5rem;
			transition: var(--transition);

			:hover {
				color: white;
				background-color: #063251;
			}
		}

		.active {
			color: white;
			background-color: #063251;
		}
	}
`;

export default App;
