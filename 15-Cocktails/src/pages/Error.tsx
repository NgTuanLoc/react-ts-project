import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Error = () => {
	return (
		<Container className='section'>
			<div className='error-container'>
				<h1>oops! it's a dead end</h1>
				<Link to='/' className='btn btn-primary'>
					back home
				</Link>
			</div>
		</Container>
	);
};

const Container = styled.section`
	display: flex;
	justify-content: center;
	align-items: center;
	height: calc(100vh - 10rem);

	h1 {
		margin-bottom: 10rem;
	}

	.error-container {
		text-align: center;
	}

	.btn {
		margin-inline: auto;
		text-transform: uppercase;
		letter-spacing: var(spacing);
		color: var(--clr-primary);
		border: 2px solid var(--clr-primary);
		padding: 0.45rem 0.8rem;
		display: inline-block;
		transition: var(--transition);
		cursor: pointer;
		font-size: 5rem;
		background: transparent;
		border-radius: var(--radius);
		display: inline-block;
	}

	.btn:hover {
		background: var(--clr-primary);
		color: white;
	}
`;

export default Error;
