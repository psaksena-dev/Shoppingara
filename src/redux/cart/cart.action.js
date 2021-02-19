import * as actions from './cart.actiontype';

export const toggleCartDropdown = () => {
	return {
		type: actions.TOGGLE_CART_DROPDOWN
	};
};
