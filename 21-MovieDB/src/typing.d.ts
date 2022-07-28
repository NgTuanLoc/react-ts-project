interface ISingleMovieInList {
	imdbID: string;
	Poster: string;
	Title: string;
	Year: string;
}

interface IMovieInfo {
	poster: string;
	title: string;
	plot: string;
	year: string;
}

interface IError {
	show: boolean;
	msg: string;
}

export { ISingleMovieInList, IMovieInfo, IError };
