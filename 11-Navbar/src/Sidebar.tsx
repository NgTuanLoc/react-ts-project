import styled from 'styled-components';

const dummyData = [
	{
		url: 'https://www.google.com/',
		title: 'Home',
	},
	{
		url: 'https://www.google.com/',
		title: 'About',
	},
	{
		url: 'https://www.google.com/',
		title: 'Projects',
	},
	{
		url: 'https://www.google.com/',
		title: 'Contact',
	},
	{
		url: 'https://www.google.com/',
		title: 'Profile',
	},
];

const Sidebar = ({ linksContainerRef, linksRef }: any) => {
	return (
		<Container ref={linksContainerRef}>
			<ul ref={linksRef}>
				{dummyData.map((item, id) => {
					return (
						<li key={id}>
							<a href={item.url}>{item.title}</a>
						</li>
					);
				})}
			</ul>
		</Container>
	);
};

const Container = styled.div`
	height: 0;
	transition: var(--transition);
	overflow: hidden;

	a {
		color: black;
		transition: var(--transition);
		margin-left: 1rem;

		:hover {
			color: var(--clr-primary);
		}
	}

	@media only screen and (min-width: 800px) {
		height: auto !important;

		ul {
			display: flex;
			justify-content: space-evenly;
			align-items: center;

			a {
				margin-inline: 1rem;
			}
		}
	}
`;

export default Sidebar;
