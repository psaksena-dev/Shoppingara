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

export const checkUserSession = () => ({
	type: actions.CHECK_USER_SESSION
});

export const signOutStart = () => ({
	type: actions.SIGN_OUT_START
});

export const signOutSuccess = () => ({
	type: actions.SIGN_OUT_SUCCESS
});

export const signOutFailure = (error) => ({
	type: actions.SIGN_OUT_FAILURE,
	payload: error
});
