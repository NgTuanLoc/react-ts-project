import styled from 'styled-components';
import { FaQuoteRight } from 'react-icons/fa';

interface ISingleInfo {
	id: number;
	image: string;
	name: string;
	title: string;
	quote: string;
}

const SingleInfo = ({ image, name, title, quote }: ISingleInfo) => {
	return (
		<Wrapper>
			<div className='info'>
				<img src={image} alt={name} />
				<h3>{name}</h3>
				<h4>{title}</h4>
				<p>{quote}</p>
			</div>

			<Icon>
				<FaQuoteRight />
			</Icon>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	max-width: var(--fixed-width);

	.info {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		text-align: center;
		img {
			width: 16rem;
			height: 16rem;
			object-fit: cover;
			border-radius: 50%;
			margin-bottom: 1rem;
			border: 5px solid #bcccdc;
		}

		h3 {
			text-transform: uppercase;
			font-size: 1.5rem;
			color: var(--clr-primary);
		}
		h4 {
			font-size: 1.3;
			font-weight: 300;
			letter-spacing: 0;
		}
	}
`;

const Icon = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 1rem;
	font-size: 2rem;
	color: white;
	background-color: #617d98;
	border-radius: var(--radius);
	font-size: 5rem;
	color: var(--clr-primary);
	margin-top: 5rem;
	cursor: pointer;
`;

export default SingleInfo;
