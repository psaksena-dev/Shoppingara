import * as actions from './cart.actiontype';

export const toggleCartDropdown = () => {
	return {
		type: actions.TOGGLE_CART_DROPDOWN
	};
};

export const addItem = (item) => {
	return {
		type: actions.ADD_ITEM,
		payload: item
	};
};

export const removeItem = (item) => {
	return {
		type: actions.REMOVE_ITEM,
		payload: item
	};
};

export const clearItemFromCart = (item) => {
	return {
		type: actions.CLEAR_ITEM_FROM_CART,
		payload: item
	};
};

export const clearCart = () => ({
	type: actions.CLEAR_CART
});
