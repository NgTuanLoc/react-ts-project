type Product = {
	id: string;
	title: string;
	price: string;
	img: string;
	amount: number;
};
interface IContextProps {
	isLoading: boolean;
	products: Product[];
	totalAmount: number;
	totalPrice: number;
}

interface IAppContext extends IContextProps {
	clearCart: () => void;
	toggleAmount: ({ type, id }: { type: 'inc' | 'dec'; id: string }) => void;
	removeItem: (id: string) => void;
}

export { Product, IAppContext, IContextProps };
