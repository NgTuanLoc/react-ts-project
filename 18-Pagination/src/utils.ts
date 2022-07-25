import { IUser } from './typing';

export const paginate = (data: IUser[], itemPerPage: number = 30) => {
	const pages = Math.ceil(data.length / itemPerPage);
	const newData = Array.from({ length: pages }, (_, index) => {
		const start = index * itemPerPage;
		return data.slice(start, start + itemPerPage);
	});
	return newData;
};
