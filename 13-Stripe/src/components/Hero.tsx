import styled from 'styled-components';

import hero from '../images/hero.svg';
import phone from '../images/phone.svg';

const Hero = () => {
	return (
		<Container>
			<div className='hero-center'>
				<article className='hero-info'>
					<h1>Payments infrastructure for the internet</h1>
					<p>
						Millions of companies of all sizes—from startups to Fortune 500s—use
						Stripe’s software and APIs to accept payments, send payouts, and
						manage their businesses online.
					</p>
					<button className='btn'>Start Now</button>
				</article>
				<article className='hero-image'>
					<img src={phone} alt='phone' />
				</article>
			</div>
		</Container>
	);
};

const Container = styled.section`
	position: relative;
	min-height: 100vh;
	margin-top: -7rem;
	display: grid;
	grid-template-columns: 1fr;
	justify-items: center;
	overflow: hidden;

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

	.hero-center {
		display: grid;
		grid-template-columns: 2fr 1fr;
		width: 90vw;
		max-width: var(--max-width);
		align-items: center;
	}

	.hero-image {
		align-self: center;
		justify-self: end;
		display: block;
		img {
			width: 30rem;
		}
	}

	@media only screen and (max-width: 800px) {
		::before {
			background-size: cover;
			height: 65%;
		}

		.hero-image {
			display: none;
		}

		.hero-center {
			grid-template-columns: 1fr;
		}
		.hero-info h1 {
			max-width: 500px;
		}
	}
`;

export default Hero;
