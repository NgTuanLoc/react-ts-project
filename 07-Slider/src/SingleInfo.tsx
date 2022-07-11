import styled from 'styled-components';
import { FaQuoteRight } from 'react-icons/fa';

interface ISingleInfo {
	id: number;
	image: string;
	name: string;
	title: string;
	quote: string;
	position: string;
}

const SingleInfo = ({ image, name, title, quote, position }: ISingleInfo) => {
	return (
		<Wrapper>
			<article className={position}>
				<div className='info'>
					<img src={image} alt={name} />
					<h3>{name}</h3>
					<h4>{title}</h4>
					<p>{quote}</p>
				</div>

				<Icon>
					<FaQuoteRight />
				</Icon>
			</article>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	display: flex;
	position: absolute;
	width: 87%;
	height: 100%;
	top: 0;
	left: 0;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: 0 5rem;

	article {
		width: 50%;
		height: 100%;
		transition: var(--transition);
		opacity: 0;
	}

	article.active {
		opacity: 1;
		transform: translateX(0);
	}
	article.pre {
		transform: translateX(50%);
	}
	article.next {
		transform: translateX(-50%);
	}

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
	margin-inline: auto;
	width: 10rem;
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
