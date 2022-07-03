import React from 'react';
import styled from 'styled-components';

export interface PersonType {
	id: number;
	name: string;
	age: number;
	image: string;
}

const Person: React.FC<PersonType> = ({ id, name, age, image }) => {
	return (
		<Wrapper>
			<img src={image} alt={name} />
			<div>
				<h3>{name}</h3>
				<p>{age} years</p>
			</div>
		</Wrapper>
	);
};

const Wrapper = styled.article`
	display: flex;
	align-items: center;
	margin: 1.5rem auto;
	img {
		width: 7.5rem;
		height: 7.5rem;
		border-radius: 50%;
		object-fit: cover;
		margin-right: 1rem;
	}
	p {
		color: var(--clr-paragraph);
		font-size: 2rem;
	}
`;

export default Person;
