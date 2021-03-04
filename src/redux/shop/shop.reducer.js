import SHOP_ACTION_TYPES from './shop.actiontype';

const INITIAL_STATE = {
	collections: null,
	isFetching: false,
	errorMessage: null
};

const shopReducer = (state = INITIAL_STATE, action) => {
	console.log('start reducer');
	switch (action.type) {
		case SHOP_ACTION_TYPES.FETCH_COLLECTION_START:
			return {
				...state,
				isFetching: true
			};
		case SHOP_ACTION_TYPES.FETCH_COLLECTION_SUCCESS:
			return {
				...state,
				isFetching: false,
				collections: action.payload
			};
		case SHOP_ACTION_TYPES.FETCH_COLLECTION_FAILURE:
			return {
				...state,
				isFetching: false,
				errorMessage: action.payload
			};
		default:
			return state;
	}
};

export default shopReducer;
