interface ISingleMovieInList {
	imdbID: string;
	Poster: string;
	Title: string;
	Year: string;
}

interface IMovieInfo {
	Poster: string;
	Title: string;
	Plot: string;
	Year: string;
}

interface IError {
	show: boolean;
	msg: string;
}

export { ISingleMovieInList, IMovieInfo, IError };
