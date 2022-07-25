import { useEffect, useState, MouseEvent } from 'react';
import styled from 'styled-components';
import {
	FaEnvelopeOpen,
	FaUser,
	FaCalendarTimes,
	FaMap,
	FaPhone,
	FaLock,
} from 'react-icons/fa';
import axios from 'axios';

type Title =
	| 'name'
	| 'email'
	| 'age'
	| 'street'
	| 'phone'
	| 'password'
	| 'image';

interface IPerson {
	name: string;
	email: string;
	age: string;
	street: string;
	phone: string;
	password: string;
	image: string;
}

const App = () => {
	const [title, setTitle] = useState('name');
	const [isLoading, setIsLoading] = useState(true);
	const [value, setValue] = useState('');
	const [person, setPerson] = useState<IPerson | null>(null);

	const fetchData = async () => {
		try {
			setIsLoading(true);
			const response = await axios.get(process.env.REACT_APP_DOMAIN as string);
			const data = response.data;
			const person = data.results[0];
			const { first, last } = person.name;
			const email = person.email;
			const { age } = person.dob;
			const { number: streetNumber, name: streetName } = person.location.street;
			const { phone } = person;
			const { password } = person.login;
			const { large: image } = person.picture;

			const newValue = {
				name: `${first} ${last}`,
				email,
				age,
				street: `${streetNumber} ${streetName}`,
				phone,
				password,
				image,
			};
			setPerson(newValue);
			setValue(newValue.name);
			setTitle('name');
			setIsLoading(false);
		} catch (error) {
			setIsLoading(false);
			console.log('🚀 ~ file: App.tsx ~ line 30 ~ fetchData ~ error', error);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	const handleValue = (event: MouseEvent<HTMLButtonElement>) => {
		const buttonTemp = event.target as HTMLButtonElement;

		const label = buttonTemp.dataset.label as Title;

		if (label && person) {
			setTitle(label);
			setValue(person[label]);
		}
	};

	return (
		<Container>
			<div className='black-background'></div>
			<div className='white-background'>
				<div className='container'>
					<img
						src={person?.image || process.env.REACT_APP_DEFAULT_IMAGE}
						alt='person'
					/>
					<p>My {title} is </p>
					<h2>{value}</h2>
					<div className='values-list'>
						<button
							className='icon'
							data-label='name'
							onMouseOver={handleValue}>
							<FaUser />
						</button>
						<button
							className='icon'
							data-label='email'
							onMouseOver={handleValue}>
							<FaEnvelopeOpen />
						</button>
						<button className='icon' data-label='age' onMouseOver={handleValue}>
							<FaCalendarTimes />
						</button>
						<button
							className='icon'
							data-label='street'
							onMouseOver={handleValue}>
							<FaMap />
						</button>
						<button
							className='icon'
							data-label='phone'
							onMouseOver={handleValue}>
							<FaPhone />
						</button>
						<button
							className='icon'
							data-label='password'
							onMouseOver={handleValue}>
							<FaLock />
						</button>
					</div>
					<button onClick={fetchData} className='random'>
						{isLoading ? 'Loading...' : 'Random User'}
					</button>
				</div>
			</div>
		</Container>
	);
};

const Container = styled.main`
	.black-background {
		min-height: 50vh;
		background-color: #2c2e31;
	}

	.white-background {
		min-height: 50vh;
	}

	.container {
		width: 90vw;
		max-width: 992px;
		position: relative;
		margin: -200px auto 0;
		border-radius: var(--radius);
		text-align: center;
		background-color: white;
		padding: 7rem 0;

		::before {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			background-color: #f1f5f8;
			height: 15rem;
			border-top-left-radius: var(--radius);
			border-top-right-radius: var(--radius);
			border-bottom: 1px solid rgba(0, 0, 0, 0.25);
		}

		img {
			position: relative;
			width: 15rem;
			height: 15rem;
			border-radius: 50%;
			border: 1px solid rgba(0, 0, 0, 0.25);
			margin-bottom: 2rem;
			box-shadow: var(--dark-shadow);
			background-color: white;
			padding: 0.5rem;
		}

		p {
			margin-bottom: 1rem;
		}

		.values-list {
			display: grid;
			grid-template-columns: repeat(6, 1fr);
			margin: 3rem 0;
			justify-content: center;
			padding-inline: 10rem;

			@media only screen and (max-width: 992px) {
				padding-inline: 0;
			}

			button {
				background-color: transparent;
				border: transparent;
				font-size: 3rem;
				color: #617d98;
				transition: var(--transition);

				:hover {
					color: #49a6e9;
				}
			}
		}

		.random {
			background-color: #49a6e9;
			font-size: 2rem;
			border: transparent;
			padding: 1rem 2rem;
			color: white;
			border-radius: var(--radius);
			transition: var(--transition);

			:hover {
				background-color: #063251;
				border-color: #063251;
			}
		}
	}
`;

export default App;
