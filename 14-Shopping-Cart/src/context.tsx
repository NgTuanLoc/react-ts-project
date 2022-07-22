import { useState, useContext, createContext, ReactNode } from 'react';

interface IAppContext {
	isLoading: boolean;
}

interface Props {
	children?: ReactNode;
}

const AppContext = createContext<Partial<IAppContext>>({});

const AppProvider = ({ children }: Props) => {
	const [isLoading, setIsLoading] = useState(false);
	return (
		<AppContext.Provider value={{ isLoading }}>{children}</AppContext.Provider>
	);
};

const useGlobalContext = () => useContext(AppContext);

export { AppProvider, useGlobalContext };
