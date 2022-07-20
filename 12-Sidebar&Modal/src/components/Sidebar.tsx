import styled from 'styled-components';
import {
	AiOutlineClose,
	AiOutlineHome,
	AiOutlineTeam,
	AiOutlineFolderOpen,
	AiOutlineCalendar,
} from 'react-icons/ai';
import { GrDocumentText } from 'react-icons/gr';

import { useGlobalContext } from '../Context';
import logo from '../logo.svg';

const Sidebar = () => {
	const { isSidebarOpen, toggleSidebar } = useGlobalContext();

	return (
		<Container isSidebarOpen={isSidebarOpen}>
			<Header>
				<img src={logo} alt='logo' />
				<CloseButton onClick={toggleSidebar}>
					<AiOutlineClose />
				</CloseButton>
			</Header>
			<Body>
				<Link>
					<a href='https://www.youtube.com/'>
						<AiOutlineHome /> Home
					</a>
				</Link>
				<Link>
					<a href='https://www.youtube.com/'>
						<AiOutlineTeam /> Team
					</a>
				</Link>
				<Link>
					<a href='https://www.youtube.com/'>
						<AiOutlineFolderOpen /> Projects
					</a>
				</Link>
				<Link>
					<a href='https://www.youtube.com/'>
						<AiOutlineCalendar /> Calendar
					</a>
				</Link>
				<Link>
					<a href='https://www.youtube.com/'>
						<GrDocumentText /> Documents
					</a>
				</Link>
			</Body>
		</Container>
	);
};

interface Props {
	isSidebarOpen: boolean | undefined;
}

const Container = styled.aside<Props>`
	position: absolute;
	top: 0;
	left: 0;
	z-index: 10;
	max-width: 35rem;
	height: 100%;
	background-color: white;
	padding-top: 2rem;
	transform: ${(Props) =>
		Props.isSidebarOpen ? 'translateX(0)' : 'translateX(-100%)'};
	transition: var(--transition);
`;

const Header = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-inline: 2rem;
	margin-bottom: 3rem;
`;

const CloseButton = styled.button`
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-size: 3.5rem;
	color: red;
	background-color: transparent;
	border: transparent;
	cursor: pointer;
`;

const Body = styled.ul`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
`;

const Link = styled.li`
	display: flex;
	justify-content: flex-start;
	align-items: flex-start;
	margin: 1rem 0;
	width: 100%;
	transition: var(--transition);
	cursor: pointer;

	a {
		display: flex;
		margin-inline: 2rem;
		justify-content: space-around;
		align-items: center;
		color: #243a52;
		font-size: 3rem;
	}

	svg {
		margin-right: 2rem;
	}

	:hover {
		background-color: #f1f5f8;
	}
`;

export default Sidebar;
