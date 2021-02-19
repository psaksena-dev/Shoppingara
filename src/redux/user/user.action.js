import * as actions from './../actions';

export const setCurrentUser = (user) => ({
	type: actions.SET_CURRENT_USER,
	payload: user
});
