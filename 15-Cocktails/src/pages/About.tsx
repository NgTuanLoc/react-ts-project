import styled from 'styled-components';

const About = () => {
	return (
		<Container>
			<h1>About Us</h1>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui expedita
				natus debitis consectetur tenetur deleniti exercitationem aut doloremque
				perferendis perspiciatis quidem distinctio autem provident corrupti
				quibusdam odio, impedit quasi odit? Laudantium facere atque quo quae
				quisquam ducimus obcaecati! Iste quia est saepe facilis quis inventore
				blanditiis rerum explicabo ex nesciunt deserunt accusantium corrupti,
				ratione dolores, quibusdam, error unde animi porro.
			</p>
		</Container>
	);
};

const Container = styled.section`
	width: 85vw;
	max-width: var(--max-width);
	margin: 0 auto;
	padding: 5rem;
	text-align: center;
	h1 {
		margin: 5rem;
	}

	p {
		text-align: start;
		font-size: 2.5rem;
		line-height: 4rem;
		font-weight: 400;
		letter-spacing: 2px;
	}
`;

export default About;
