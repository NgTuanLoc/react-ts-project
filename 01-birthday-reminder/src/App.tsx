import { useState } from 'react';

import { Card } from './components/Card';
import { data } from './data';

function App() {
	const [people, setPeople] = useState(data);

	const clearPeople = () => {
		setPeople([]);
	};

	const getAllPeople = () => {
		setPeople(data);
	};

	return (
		<main className='container'>
			<Card
				people={people}
				clearPeople={clearPeople}
				getAllPeople={getAllPeople}
			/>
		</main>
	);
}

export default App;
