import { useState } from 'react';
import styled from 'styled-components';

import Food, { FoodType } from './components/Food';
import Category from './components/Category';
import { data } from './data/data';

const categories = [
	'all',
	...Array.from(new Set(data.map((item) => item.category))),
];

function App() {
	const [Menu, setMenu] = useState<FoodType[]>(data);

	const filterFood = (category: string) => {
		if (category === 'all') {
			setMenu(data);
		} else {
			const newFood = data.filter((food) => food.category === category);
			setMenu(newFood);
		}
	};

	return (
		<Wrapper className='App'>
			<div className='title'>
				<h1>Our Menu</h1>
				<div className='underline'></div>
			</div>
			<div className='content'>
				<Category categories={categories} filterFood={filterFood} />
				<div className='menu'>
					{Menu.map((food) => (
						<Food key={food.id} {...food} />
					))}
				</div>
			</div>
		</Wrapper>
	);
}

const Wrapper = styled.main`
	width: 80vw;
	max-width: var(--max-width);
	margin: 5rem auto;
	.title {
		text-align: center;
		margin-bottom: 2rem;
		h1 {
			font-size: 4rem;
		}
		.underline {
			background-color: var(--clr-primary);
			width: 8rem;
			height: 4px;
			margin: 0.5rem auto;
		}
	}

	.menu {
		display: grid;
		grid-gap: 2rem;
		grid-template-columns: 1fr 1fr;
	}
	@media only screen and (max-width: 1200px) {
		.menu {
			grid-template-columns: 1fr;
		}
		article {
			grid-template-columns: 30rem 1fr;
			padding-inline: 10rem;
		}
	}
`;

export default App;
