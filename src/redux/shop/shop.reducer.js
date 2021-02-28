import * as actions from './shop.actiontype';

const INITIAL_STATE = {
	collections: null
};

const shopReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case actions.UPDATE_SHOP_COLLECTION:
			return {
				...state,
				collections: action.payload
			};
		default:
			return state;
	}
};

export default shopReducer;
