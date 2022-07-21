import styled from 'styled-components';

import hero from '../images/hero.svg';

const Hero = () => {
	return (
		<Container>
			<h1>Hero</h1>
		</Container>
	);
};

const Container = styled.section`
	position: relative;
	min-height: 100vh;
	margin-top: -5rem;
	display: grid;
	grid-template-columns: 1fr;
	justify-items: center;

	::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		background: ${`url(${hero})`};
		background-repeat: no-repeat;
		background-size: contain;
		z-index: -1;
		height: 100%;
		width: 100%;
	}
`;

export default Hero;
