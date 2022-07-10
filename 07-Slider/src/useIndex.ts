import { useState } from 'react';

export const useIndex = (
	initialIndex: number,
	maxLength: number
): [number, number, number, any] => {
	const [index, setIndex] = useState(initialIndex);
	const preIndex = index - 1;
	const nextIndex = index + 1;

	if (index < 0) setIndex(maxLength);
	if (index > maxLength) setIndex(0);

	return [index, preIndex, nextIndex, setIndex];
};
