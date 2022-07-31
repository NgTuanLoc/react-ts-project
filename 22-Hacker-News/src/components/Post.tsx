import styled from 'styled-components';

import { IPost } from '../typing';
import { filterPost } from '../features/postSlice';
import { useAppDispatch } from '../app/hooks';

const Post = ({
	objectID,
	title,
	num_comments,
	url,
	points,
	author,
}: IPost) => {
	const dispatch = useAppDispatch();

	const removePost = () => {
		dispatch(filterPost(objectID));
	};

	return (
		<Container>
			<h4>{title}</h4>
			<p>
				{points} points by {author} | {num_comments} comments
			</p>
			<div className='btn-container'>
				<button className='primary'>
					<a href={url} target='_blank' rel='noopener noreferrer'>
						read more
					</a>
				</button>
				<button className='danger' onClick={removePost}>
					remove
				</button>
			</div>
		</Container>
	);
};

const Container = styled.article`
	text-align: left;
	background-color: white;
	padding: 1.5rem;
	border-radius: var(--radius);

	width: 100%;
	p {
		font-size: 1rem;
		letter-spacing: 1px;
		font-weight: bold;
		color: #617d98;
	}

	button,
	a {
		margin-right: 0.5rem;
		background-color: transparent;
		border-color: transparent;
		font-size: 1.2rem;
		text-transform: capitalize;
		cursor: pointer;
	}

	.primary {
		color: var(--clr-primary);
	}
	.danger {
		color: var(--clr-danger);
	}
`;

export default Post;
