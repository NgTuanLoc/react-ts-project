import moment from 'moment';
import styled from 'styled-components';

import { IArticle } from './typing';

const Article = ({ title, date, length, snippet }: IArticle) => {
	return (
		<Container>
			<h2>{title}</h2>
			<div className='info'>
				<span>{moment(date).format('MMMM dddd Do, YYYY')}</span>
				<span> - {length} minutes read</span>
			</div>
			<p>{snippet}</p>
		</Container>
	);
};

const Container = styled.article`
	margin: 5rem 0;

	.info {
		margin-bottom: 2rem;
	}
`;

export default Article;
