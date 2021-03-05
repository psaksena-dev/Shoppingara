import * as actions from './user.actiontype';

export const googleSignInStart = () => ({
	type: actions.GOOGLE_SIGNIN_START
});

export const signInSuccess = (user) => ({
	type: actions.SIGNIN_SUCCESS,
	payload: user
});

export const signInFail = (error) => ({
	type: actions.SIGNIN_FAIL,
	payload: error
});

export const emailSignInStart = (emailAndPassword) => ({
	type: actions.EMAIL_SIGNIN_START,
	payload: emailAndPassword
});
