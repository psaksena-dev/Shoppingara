import * as actions from './cart.actiontype';
import { addItemToCart, removeItemFromCart } from './cart.utils';

const INITIAL_STATE = {
	hidden: true,
	cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case actions.TOGGLE_CART_DROPDOWN:
			return {
				...state,
				hidden: !state.hidden
			};
		case actions.ADD_ITEM:
			return {
				...state,
				cartItems: addItemToCart(state.cartItems, action.payload)
			};
		case actions.REMOVE_ITEM:
			return {
				...state,
				cartItems: removeItemFromCart(state.cartItems, action.payload)
			};
		case actions.CLEAR_ITEM_FROM_CART:
			return {
				...state,
				cartItems: state.cartItems.filter(
					(cartItem) => cartItem.id !== action.payload.id
				)
			};
		default:
			return state;
	}
};

export default cartReducer;
