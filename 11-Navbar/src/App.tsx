import styled from 'styled-components';
import { loremIpsum, ILoremIpsumParams } from 'lorem-ipsum';
import { useState, ChangeEvent, ChangeEventHandler } from 'react';

enum Units {
	words = 'words',
	paragraphs = 'paragraphs',
	sentences = 'sentences',
}

function App() {
	const [loremConfig, setLoremConfig] = useState<ILoremIpsumParams>({
		count: 2, // Number of "words", "sentences", or "paragraphs"
		format: 'plain', // "plain" or "html"
		paragraphLowerBound: 3, // Min. number of sentences per paragraph.
		paragraphUpperBound: 7, // Max. number of sentences per paragarph.
		random: Math.random, // A PRNG function
		sentenceLowerBound: 5, // Min. number of words per sentence.
		sentenceUpperBound: 15, // Max. number of words per sentence.
		suffix: '\n', // Line ending, defaults to "\n" or "\r\n" (win32)
		units: Units.paragraphs, // paragraph(s), "sentence(s)", or "word(s)"
		// words: ['ad', 'su'], // Array of words to draw from
	});

	const [content, setContent] = useState<string>('');

	const onChangeHandler = (
		e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
	): void => {
		const name = e.target.id;
		const value = name === 'units' ? e.target.value : Number(e.target.value);

		setLoremConfig({
			...loremConfig,
			[name]: value,
		});
	};

	const generateHandler = () => {
		setContent(loremIpsum(loremConfig));
	};

	return (
		<Container className='App'>
			<h1>Lorem Ipsum Generator</h1>
			<InputContainer>
				<Label htmlFor='count'>Count: </Label>
				<Input
					id='count'
					type='number'
					value={loremConfig.count}
					onChange={onChangeHandler}
				/>
				<Label htmlFor='paragraphLowerBound'>Paragraph Lower Bound</Label>
				<Input
					id='paragraphLowerBound'
					type='number'
					value={loremConfig.paragraphLowerBound}
					onChange={onChangeHandler}
				/>
				<Label htmlFor='paragraphUpperBound'>Paragraph Upper Bound</Label>
				<Input
					id='paragraphUpperBound'
					type='number'
					value={loremConfig.paragraphUpperBound}
					onChange={onChangeHandler}
				/>
				<Label htmlFor='sentenceLowerBound'>Sentence Lower Bound </Label>
				<Input
					id='sentenceLowerBound'
					type='number'
					value={loremConfig.sentenceLowerBound}
					onChange={onChangeHandler}
				/>
				<Label htmlFor='sentenceUpperBound'>Sentence Upper Bound </Label>
				<Input
					id='sentenceUpperBound'
					type='number'
					value={loremConfig.sentenceUpperBound}
					onChange={onChangeHandler}
				/>
				<Label htmlFor='units'>Units</Label>
				<select
					value={loremConfig.units}
					name='units'
					id='units'
					onChange={onChangeHandler}>
					<option value='words'>Words</option>
					<option value='sentences'>Sentences</option>
					<option value='paragraphs'>Paragraphs</option>
				</select>
				<Button onClick={generateHandler}>Generate</Button>
			</InputContainer>
			<Content className='content'>
				{content.split('\n').map((item, id) => {
					return <p key={id}>{item}</p>;
				})}
			</Content>
		</Container>
	);
}

const Container = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	padding: 5rem;
	select {
		background-color: white;
		padding: 0.5rem;
		border: none;
		font-size: 2rem;
		margin-inline: 1rem;
	}
`;

const Button = styled.button`
	font-size: 2rem;
	font-weight: bold;
	letter-spacing: 3px;
	text-transform: uppercase;
	background-color: #49a6e9;
	padding: 1rem 1.5rem;
	border: none;
	border-radius: var(--radius);
	transition: var(--transition);
	margin-inline: 5rem;
	cursor: pointer;

	:hover {
		background-color: #a5d5f8;
	}
`;

const InputContainer = styled.div`
	max-width: 80vw;
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: left;
`;

const Input = styled.input`
	background-color: white;
	padding: 0.5rem;
	border: none;
	font-size: 2rem;
	margin: 1rem;
`;

const Label = styled.label`
	color: #063251;
	font-style: 2.5rem;
	font-weight: 500;
	margin: 1rem;
`;

const Content = styled.section`
	text-align: center;
	max-width: 70vw;
	margin-top: 10rem;

	p {
		margin-top: 2rem;
		font-size: 3rem;
	}

	@media only screen and (max-width: 1200px) {
		max-width: 90vw;
	}
`;

export default App;
