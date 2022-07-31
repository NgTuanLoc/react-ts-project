import styled from 'styled-components';

import { useAppSelector } from '../app/hooks';
import Post from './Post';

const PostContainer = () => {
	const { hits } = useAppSelector((store) => store.post);

	return (
		<Container>
			{hits.map((item) => {
				return <Post key={item.objectID} {...item} />;
			})}
		</Container>
	);
};

const Container = styled.section`
	position: relative;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
	grid-gap: 2rem;
	margin-inline: auto;
`;

export default PostContainer;
