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

interface IAppContext extends IAppContextState {}

export { ICocktail, IAppContextState, IAppContext };
