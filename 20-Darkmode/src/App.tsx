import styled from 'styled-components';
import { useState, useEffect } from 'react';

import { articles } from './data';
import Article from './Article';

const App = () => {
	const [toggleDarkmode, setToggleDarkmode] = useState(false);

	useEffect(() => {
		if (toggleDarkmode) {
			document.documentElement.className = 'dark-theme';
		} else {
			document.documentElement.className = 'light-theme';
		}
	}, [toggleDarkmode]);

	return (
		<Container>
			<header>
				<h1>OverReacted </h1>
				<button onClick={() => setToggleDarkmode(!toggleDarkmode)}>
					toggle
				</button>
			</header>
			<section>
				{articles.map((article) => {
					return <Article key={article.id} {...article} />;
				})}
			</section>
		</Container>
	);
};

const Container = styled.main`
	width: 90vw;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	max-width: var(--max-width);
	margin-inline: auto;
	padding: 4rem;

	header {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		h1 {
			margin: 0;
		}
		margin-bottom: 8rem;
	}

	section {
		width: 100%;
	}
`;

export default App;
