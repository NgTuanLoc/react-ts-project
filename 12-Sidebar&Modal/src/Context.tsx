import { useState, createContext, useContext, ReactNode } from 'react';

interface Props {
	children?: ReactNode;
}

interface IAppContext {
	isSidebarOpen: boolean;
	isModalOpen: boolean;
	toggleSidebar: () => void;
	showModal: () => void;
	hideModal: () => void;
}

const AppContext = createContext<Partial<IAppContext>>({});

const AppProvider = ({ children }: Props) => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(true);
	const [isModalOpen, setIsModalOpen] = useState(true);

	const toggleSidebar = () => {
		setIsSidebarOpen(!isSidebarOpen);
	};

	const showModal = () => {
		setIsModalOpen(true);
	};
	const hideModal = () => {
		setIsModalOpen(false);
	};

	return (
		<AppContext.Provider
			value={{
				isSidebarOpen,
				toggleSidebar,
				isModalOpen,
				showModal,
				hideModal,
			}}>
			{children}
		</AppContext.Provider>
	);
};

const useGlobalContext = () => useContext(AppContext);

export { AppProvider, useGlobalContext };
