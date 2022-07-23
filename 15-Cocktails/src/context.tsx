import {
	useState,
	useContext,
	useEffect,
	useCallback,
	createContext,
	ReactNode,
} from 'react';
import axios from 'axios';

import { IAppContext, ICocktail } from './typing';

interface Props {
	children: ReactNode;
}

const AppContext = createContext<IAppContext>({} as IAppContext);

const AppProvider = ({ children }: Props) => {
	const [cocktails, setCocktails] = useState<ICocktail[]>([]);

	const [isLoading, setIsLoading] = useState(true);
	const [searchTerm, setSearchTerm] = useState('a');

	const fetchData = useCallback(async () => {
		console.log('🚀 ~ file: context.tsx ~ line 26 ~ fetchData ~ useCallback');

		try {
			setIsLoading(true);
			const response = await axios.get(
				`${process.env.REACT_APP_DOMAIN}${searchTerm}`
			);
			const { drinks } = response.data;

			if (drinks) {
				const newDrinkList = drinks.map((drink: any) => {
					const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } =
						drink;
					return {
						id: idDrink,
						name: strDrink,
						image: strDrinkThumb,
						info: strAlcoholic,
						glass: strGlass,
					};
				});

				setCocktails(newDrinkList);
			} else {
				setCocktails([]);
			}

			setIsLoading(false);
		} catch (error) {
			console.log(error);
			setIsLoading(false);
		}
	}, [searchTerm]);

	useEffect(() => {
		fetchData();
	}, [searchTerm, fetchData]);

	return (
		<AppContext.Provider
			value={{ cocktails, isLoading, searchTerm, setSearchTerm }}>
			{children}
		</AppContext.Provider>
	);
};

const useGlobalContext = () => useContext(AppContext);

export { AppProvider, useGlobalContext };
