import styled from 'styled-components';
import { useProgressiveImage } from './useProgressiveImage';
import { IPhoto } from './typing';

const Photo = ({ urls, alt_description, likes, user }: IPhoto) => {
	const [src, { blur }] = useProgressiveImage(urls.small, urls.full);

	return (
		<Container>
			<img
				src={src}
				style={{
					filter: blur ? 'blur(20px)' : 'none',
					transition: blur ? 'none' : 'filter 0.3s ease-out',
				}}
				alt={alt_description}
			/>
			<div className='author'>
				<div className='info'>
					<h3 className='name'>{user.name}</h3>
					<h4 className='like'>{likes} likes</h4>
				</div>
				<img src={user.profile_image.small} alt={user.portfolio_url} />
			</div>
		</Container>
	);
};

const Container = styled.article`
	height: 30rem;
	overflow: hidden;
	width: 100%;
	border-radius: var(--radius);
	position: relative;
	cursor: pointer;

	img {
		width: 100%;
		height: 100%;
		display: block;
		object-fit: cover;
	}

	.author {
		position: absolute;
		width: 100%;
		bottom: 0;
		left: 0;
		background-color: rgba(0, 0, 0, 0.1);
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1rem;
		transform: translateY(100%);
		transition: var(--transition);

		.name,
		.like {
			color: white;
		}

		.name {
			font-size: 2rem;
		}

		.like {
			font-size: 1.5rem;
		}

		img {
			height: 5rem;
			width: 5rem;
			border-radius: 50%;
		}
	}

	:hover {
		.author {
			transform: translateY(0%);
		}
	}
`;

export default Photo;
