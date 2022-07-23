import {
	useState,
	createContext,
	useContext,
	useCallback,
	ReactNode,
} from 'react';

interface Props {
	children: ReactNode;
}

const AppContext = createContext({});

const AppProvider = ({ children }: Props) => {
	return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
};

const useGlobalContext = () => useContext(AppContext);

export { AppProvider, useGlobalContext };
