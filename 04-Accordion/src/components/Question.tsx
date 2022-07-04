import React, { useState } from 'react';
import styled from 'styled-components';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

export interface QuestionType {
	id: number;
	title: string;
	info: string;
}

const Question: React.FC<QuestionType> = ({ title, info }) => {
	const [showMore, setShowMore] = useState<boolean>(true);

	const toggleShowMore = () => {
		setShowMore(!showMore);
	};

	return (
		<Wrapper>
			<header>
				<h3>{title}</h3>
				<button onClick={() => toggleShowMore()}>
					{showMore ? <AiOutlineMinus></AiOutlineMinus> : <AiOutlinePlus />}
				</button>
			</header>
			{showMore && <p>{info}</p>}
		</Wrapper>
	);
};

const Wrapper = styled.article`
	padding: 2rem;
	box-shadow: var(--light-shadow);
	margin-bottom: 2rem;
	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 2rem;
		button {
			color: #c87691;
			background-color: var(--clr-btn);
			padding: 1rem;
			border-radius: 100%;
			border: none;
			font-size: 2rem;
			width: 4rem;
			height: 4rem;
			text-align: center;
			cursor: pointer;
		}
		h3 {
			font-size: 2rem;
			margin: 0;
		}
		p {
			color: #324d67;
		}
	}
`;

export default Question;
