import styled from 'styled-components';
import { ReactNode } from 'react';

interface IButton {
	children: ReactNode;
	color?: string;
	backgroundColor?: string;
	width?: string;
	type: 'submit' | 'button';
}

const Button = ({ children, color, backgroundColor, width, type }: IButton) => {
	return (
		<Container
			type={type}
			backgroundColor={backgroundColor}
			color={color}
			width={width}>
			{children}
		</Container>
	);
};

// Styled
interface Props {
	color?: string;
	backgroundColor?: string;
	width?: string;
}

const Container = styled.button<Props>`
	color: ${(props) => (props.color ? props.color : 'black')};
	background-color: ${(props) =>
		props.backgroundColor ? props.backgroundColor : 'var(--clr-secondary)'};
	width: ${(props) => (props.width ? props.width : '100%')};
	padding: 1rem 2rem;
	border-radius: var(--radius);
	border: transparent;
	cursor: pointer;
`;

export default Button;
