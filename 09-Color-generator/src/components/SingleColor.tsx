import styled from 'styled-components';
import { HSL } from '../typing';

export interface IContainer {
	color: string;
}

export interface ISingleColor {
	color: HSL;
}

const SingleColor = ({ color }: ISingleColor) => {
	const { hue, saturation, lightness } = color;

	return (
		<Container color={`hsl(${hue},${saturation}%,${lightness}%)`}></Container>
	);
};

const Container = styled.section<IContainer>`
	cursor: pointer;
	background-color: ${(props) => props.color};
`;

export default SingleColor;
