import { hexToHsl } from './hexToHSL';

export const generateColorPalette = (color: string, addedHueValue = 0) => {
	// Hue, Saturation, Lightness
	const { h, s, l } = hexToHsl(color);
	const lightnessList = Array.from({ length: 10 }, (_, i) => (l % 10) + 10 * i);

	// const hueList = Array.from({ length: 10 }, (_, i) => (h % 35) + 35 * i);

	const colors = lightnessList.map((lightness) => {
		return { hue: h + addedHueValue, saturation: s, lightness };
	});

	return colors;
};
