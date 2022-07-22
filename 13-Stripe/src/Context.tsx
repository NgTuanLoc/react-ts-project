import { useState, createContext, useContext, ReactNode } from 'react';

import { data } from './data';

interface Props {
	children?: ReactNode;
}

type location = { center: number; bottom: number };
type link = {
	label: string;
	icon: JSX.Element;
	url: string;
};
type page = {
	page: string;
	links: link[];
};
interface IAppContext {
	isSidebarOpen: boolean;
	closeSidebar: () => void;
	openSidebar: () => void;
	isSubMenuOpen: boolean;
	location: location;
	page: page;
	showSubMenu: (location: location, page: string) => void;
	closeSubMenu: () => void;
}

const AppContext = createContext<Partial<IAppContext>>({});

const AppProvider = ({ children }: Props) => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
	const [location, setLocation] = useState<location | undefined>();
	const [page, setPage] = useState<page>({ page: '', links: [] });

	const showSubMenu = (location: location, page: string) => {
		const links = data.find((item) => item.page === page);

		setLocation(location);
		if (links) {
			setPage(links);
		}
		setIsSubMenuOpen(true);
	};
	const closeSubMenu = () => {
		setIsSubMenuOpen(false);
	};

	const closeSidebar = () => {
		setIsSidebarOpen(false);
	};
	const openSidebar = () => {
		setIsSidebarOpen(true);
	};

	return (
		<AppContext.Provider
			value={{
				isSidebarOpen,
				closeSidebar,
				openSidebar,
				isSubMenuOpen,
				location,
				page,
				showSubMenu,
				closeSubMenu,
			}}>
			{children}
		</AppContext.Provider>
	);
};

const useGlobalContext = () => useContext(AppContext);

export { AppProvider, useGlobalContext };
