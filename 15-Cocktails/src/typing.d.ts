import { React } from 'react';

interface ICocktail {
	id: string;
	name: string;
	image: string;
	info: string;
	glass: string;
}

interface IAppContextState {
	cocktails: ICocktail[];
	isLoading: boolean;
	searchTerm: string;
}

interface IAppContext extends IAppContextState {
	setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

interface ICocktailInfo {
	name: string;
	info: string;
	image: string;
	category: string;
	glass: string;
	instructions: string;
	ingredients: string[];
}

export { ICocktail, IAppContextState, IAppContext, ICocktailInfo };
