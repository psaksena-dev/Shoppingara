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
