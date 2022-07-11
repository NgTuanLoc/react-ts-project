import { useState } from 'react';

export const useIndex = (
	initialIndex: number,
	maxLength: number
): [number, number, number, any] => {
	const [index, setIndex] = useState(initialIndex);
	if (index < 0) setIndex(maxLength);
	if (index > maxLength) setIndex(0);

	let preIndex = index - 1;
	let nextIndex = index + 1;

	if (preIndex < 0) preIndex = maxLength;
	if (nextIndex > maxLength) nextIndex = 0;

	return [index, preIndex, nextIndex, setIndex];
};
