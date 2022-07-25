import { useState, useEffect } from 'react';
import axios from 'axios';

import { paginate } from './utils';
import { IUser } from './typing';

interface ArrayOfUserPage {
	[page: number]: IUser[];
}

export const useFetch = () => {
	const [isLoading, setIsLoading] = useState(true);

	const [users, setUsers] = useState<IUser[][]>([]);

	const fetchData = async () => {
		try {
			setIsLoading(true);
			const response = await axios.get(process.env.REACT_APP_DOMAIN as string);
			const data = response.data;
			const newData = paginate(data);
			console.log(
				'🚀 ~ file: useFetch.tsx ~ line 13 ~ useFetch ~ isLoading',
				isLoading
			);
			setUsers(newData);

			setIsLoading(false);
			console.log(
				'🚀 ~ file: useFetch.tsx ~ line 13 ~ useFetch ~ isLoading',
				isLoading
			);
		} catch (error) {
			console.log(
				'🚀 ~ file: useFetch.tsx ~ line 13 ~ fetchData ~ error',
				error
			);
			setIsLoading(false);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	return { users, isLoading };
};
