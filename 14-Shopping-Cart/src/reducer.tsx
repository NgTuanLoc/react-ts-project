import { IContextProps, Product } from './typing';

type ACTION_TYPE =
	| { type: 'CLEAR_CART' }
	| { type: 'LOADING' }
	| { type: 'TOGGLE_AMOUNT'; payload: { type: 'inc' | 'dec'; id: string } }
	| { type: 'REMOVE_ITEM'; payload: { id: string } }
	| { type: 'GET_TOTAL' }
	| { type: 'FETCHING_DATA'; payload: Product[] };

const reducer = (state: IContextProps, action: ACTION_TYPE) => {
	switch (action.type) {
		case 'CLEAR_CART':
			return { ...state, products: [] };
		case 'LOADING':
			return { ...state, isLoading: true };
		case 'TOGGLE_AMOUNT':
			const { id, type } = action.payload;
			const newCart = state.products
				.map((cartItem) => {
					if (cartItem.id === id) {
						if (type === 'inc') {
							return { ...cartItem, amount: cartItem.amount + 1 };
						} else if (type === 'dec') {
							return { ...cartItem, amount: cartItem.amount - 1 };
						}
					}
					return cartItem;
				})
				.filter((cartItem) => {
					return cartItem.amount !== 0;
				});

			return { ...state, products: newCart };
		case 'REMOVE_ITEM':
			const newFilteredCart = state.products.filter(
				(cartItem) => cartItem.id !== action.payload.id
			);
			return { ...state, products: newFilteredCart };
		case 'FETCHING_DATA':
			return { ...state, products: action.payload, isLoading: false };

		case 'GET_TOTAL':
			let { amount, price } = state.products.reduce(
				(totalItem, currentItem) => {
					const { amount, price } = currentItem;
					totalItem.amount += amount;
					totalItem.price += Number(price) * totalItem.amount;
					return totalItem;
				},
				{ amount: 0, price: 0 }
			);
			price = parseFloat(price.toFixed(2));

			return { ...state, totalAmount: amount, totalPrice: price };
		default:
			return state;
	}
};

export default reducer;
