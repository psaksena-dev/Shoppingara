import * as actions from './user.actiontype';

const INITIAL_STATE = {
	currentUser: null,
	error: null
};

const userReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case actions.SIGNIN_SUCCESS:
			return {
				...state,
				currentUser: action.payload,
				error: null
			};
		case actions.SIGNIN_FAIL:
			return {
				...state,
				error: action.payload
			};
		default:
			return state;
	}
};

export default userReducer;
