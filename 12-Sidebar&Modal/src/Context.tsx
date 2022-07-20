import { useState, createContext, useContext, ReactNode } from 'react';

interface Props {
	children?: ReactNode;
}

interface IAppContext {
	isSidebarOpen: boolean;
	toggleSidebar: () => void;
}

const AppContext = createContext<Partial<IAppContext>>({});

const AppProvider = ({ children }: Props) => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(true);

	const toggleSidebar = () => {
		setIsSidebarOpen(!isSidebarOpen);
	};

	return (
		<AppContext.Provider value={{ isSidebarOpen, toggleSidebar }}>
			{children}
		</AppContext.Provider>
	);
};

const useGlobalContext = () => useContext(AppContext);

export { AppProvider, useGlobalContext };
