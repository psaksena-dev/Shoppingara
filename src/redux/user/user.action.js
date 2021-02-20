import * as actions from './user.actiontype';

export const setCurrentUser = (user) => ({
	type: actions.SET_CURRENT_USER,
	payload: user
});
