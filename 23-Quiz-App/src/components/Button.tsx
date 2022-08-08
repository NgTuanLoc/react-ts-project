import styled from 'styled-components';
import { ReactNode } from 'react';

interface IButton {
	children: ReactNode;
	className?: string;
	type: 'submit' | 'button';
	onClickHandler?: any;
}

const Button = ({ children, className, type, onClickHandler }: IButton) => {
	return (
		<Container className={className} onClick={onClickHandler} type={type}>
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
	border: transparent;
	transition: var(--transition);
	cursor: pointer;
`;

export default Button;
