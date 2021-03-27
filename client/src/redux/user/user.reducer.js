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
		case actions.SIGN_OUT_SUCCESS:
			return {
				...state,
				currentUser: null,
				error: null
			};
		case actions.SIGN_OUT_FAILURE:
		case actions.SIGNIN_FAIL:
		case actions.SIGN_UP_FAILURE:
			return {
				...state,
				error: action.payload
			};
		default:
			return state;
	}
};

export default userReducer;
