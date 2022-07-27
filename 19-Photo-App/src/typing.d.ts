interface IPhoto {
	id: string;
	urls: {
		raw: string;
		full: string;
		regular: string;
		small: string;
	};
	alt_description: string;
	likes: number;
	user: {
		name: string;
		portfolio_url: string;
		profile_image: {
			small: string;
			medium: string;
			large: string;
		};
	};
}

export { IPhoto };
