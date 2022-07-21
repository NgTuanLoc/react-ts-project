import { createContext, useContext, ReactNode } from 'react';

interface Props {
	children?: ReactNode;
}

interface IAppContext {
	value: number;
}

const AppContext = createContext<Partial<IAppContext>>({});

const AppProvider = ({ children }: Props) => {
	const value = 12;

	return (
		<AppContext.Provider value={{ value }}>{children}</AppContext.Provider>
	);
};

const useGlobalContext = () => useContext(AppContext);

export { AppProvider, useGlobalContext };
