import styled from 'styled-components';
import { IUser } from './typing';
const User = ({ avatar_url, html_url, login }: IUser) => {
	return (
		<Container>
			<img src={avatar_url} alt={login} />
			<h4>{login}</h4>
			<button>
				<a href={html_url}> view profile</a>
			</button>
		</Container>
	);
};

const Container = styled.article`
	background-color: white;
	padding: 3rem 5rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-direction: column;
	border-radius: var(--radius);
	box-shadow: var(--light-shadow);

	img {
		height: 15rem;
		width: 15rem;
		border-radius: 50%;
	}

	button {
		background-color: var(--clr-primary);
		padding: 0.5rem 1rem;
		border: transparent;
		border-radius: var(--radius);
		transition: var(--transition);
		a {
			font-size: 2rem;
			color: white;
			text-transform: capitalize;
		}

		:hover {
			background-color: var(--clr-primary-1);
		}
	}
`;

export default User;
