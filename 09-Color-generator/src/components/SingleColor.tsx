import styled from 'styled-components';
import { useState } from 'react';

import { HSLToHex } from '../utils/hslToHex';
import { HSL } from '../typing';

export interface IContainer {
	color: string;
}

export interface ISingleColor {
	color: HSL;
}

const SingleColor = ({ color }: ISingleColor) => {
	const { hue, saturation, lightness } = color;
	const [alert, setAlert] = useState('');

	const copyColorValue = () => {
		const hexColor = HSLToHex({ h: hue, s: saturation, l: lightness });
		const convertedHexColor = `#${hexColor.r}${hexColor.b}${hexColor.b}`;

		setAlert(`Copy ${convertedHexColor} to clipboard`);

		navigator.clipboard.writeText(convertedHexColor);
		setTimeout(() => {
			setAlert('');
		}, 3000);
	};

	return (
		<Container
			onClick={copyColorValue}
			color={`hsl(${hue},${saturation}%,${lightness}%)`}>
			<Alert>{alert}</Alert>
		</Container>
	);
};

const Container = styled.section<IContainer>`
	cursor: pointer;
	background-color: ${(props) => props.color};
`;

const Alert = styled.p`
	margin: 1rem;
	font-size: 2rem;
`;

export default SingleColor;
