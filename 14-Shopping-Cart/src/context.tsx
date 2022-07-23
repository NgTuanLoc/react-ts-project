import {
	useReducer,
	useEffect,
	useContext,
	createContext,
	ReactNode,
} from 'react';

import { IAppContext, IContextProps } from './typing';
import reducer from './reducer';
import axios from 'axios';

const initialState: IContextProps = {
	isLoading: false,
	products: [],
	totalAmount: 0,
	totalPrice: 0,
};

interface Props {
	children?: ReactNode;
}

const AppContext = createContext<IAppContext>(null!);

const AppProvider = ({ children }: Props) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const clearCart = () => dispatch({ type: 'CLEAR_CART' });
	const toggleAmount = ({ type, id }: { type: 'inc' | 'dec'; id: string }) => {
		dispatch({ type: 'TOGGLE_AMOUNT', payload: { id, type } });
	};
	const removeItem = (id: string) => {
		dispatch({ type: 'REMOVE_ITEM', payload: { id } });
	};
	const fetchData = async () => {
		dispatch({ type: 'LOADING' });

		const response = await axios.get(process.env.REACT_APP_DOMAIN as string);

		dispatch({ type: 'FETCHING_DATA', payload: response.data });
	};

	useEffect(() => {
		fetchData();
	}, []);

	useEffect(() => {
		dispatch({ type: 'GET_TOTAL' });
	}, [state.products]);

	return (
		<AppContext.Provider
			value={{ ...state, clearCart, toggleAmount, removeItem }}>
			{children}
		</AppContext.Provider>
	);
};

const useGlobalContext = () => useContext(AppContext);

export { AppProvider, useGlobalContext };
