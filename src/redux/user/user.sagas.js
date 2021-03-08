import { call, put, takeLatest, all } from 'redux-saga/effects';
import * as actions from './user.actiontype';
import {
	createUsrProfileDocuemnt,
	auth,
	googleProvider,
	getCurrentUser
} from './../../firebase/firebase.utils';

import {
	signInSuccess,
	signInFail,
	signOutSuccess,
	signOutFailure,
	signUpSuccess,
	signUpFailure
} from './user.action';

export function* getSnapshotFromUserAuth(user, additionalData) {
	try {
		const userRef = yield call(createUsrProfileDocuemnt, user, additionalData);
		const snapshot = yield userRef.get();
		yield put(
			signInSuccess({
				id: snapshot.id,
				...snapshot.data()
			})
		);
	} catch (error) {
		yield put(signInFail(error));
	}
}

export function* signInWithGoogle() {
	try {
		const { user } = yield auth.signInWithPopup(googleProvider);
		yield call(getSnapshotFromUserAuth, user);
	} catch (error) {
		yield put(signInFail(error));
	}
}

export function* onGoogleSigninStart() {
	yield takeLatest(actions.GOOGLE_SIGNIN_START, signInWithGoogle);
}

export function* signInWithEmail({ payload: { email, password } }) {
	try {
		const { user } = yield auth.signInWithEmailAndPassword(email, password);
		yield call(getSnapshotFromUserAuth, user);
	} catch (error) {
		yield put(signInFail(error));
	}
}

export function* onEmailSigninStart() {
	yield takeLatest(actions.EMAIL_SIGNIN_START, signInWithEmail);
}

export function* isUserAuthenticated() {
	try {
		const userAuth = yield getCurrentUser();
		if (!userAuth) return;
		yield getSnapshotFromUserAuth(userAuth);
	} catch (error) {
		yield put(signInFail(error));
	}
}

export function* onCheckUserSession() {
	yield takeLatest(actions.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* signout() {
	try {
		yield auth.signOut();
		yield put(signOutSuccess());
	} catch (error) {
		yield put(signOutFailure(error));
	}
}
export function* onSignOutStart() {
	yield takeLatest(actions.SIGN_OUT_START, signout);
}

export function* signUp({ payload: { email, password, displayName } }) {
	try {
		const { user } = yield auth.createUserWithEmailAndPassword(email, password);
		debugger;
		yield put(
			signUpSuccess({
				user,
				additionalData: {
					displayName
				}
			})
		);
	} catch (error) {
		yield put(signUpFailure(error));
	}
}

export function* signInAfterSignUpSuccess({
	payload: { user, additionalData }
}) {
	debugger;
	yield getSnapshotFromUserAuth(user, additionalData);
}

export function* onSignUpStart() {
	yield takeLatest(actions.SIGN_UP_START, signUp);
}

export function* onSignUpSuccess() {
	yield takeLatest(actions.SIGN_UP_SUCCESS, signInAfterSignUpSuccess);
}

export function* userSagas() {
	yield all([
		call(onGoogleSigninStart),
		call(onEmailSigninStart),
		call(onCheckUserSession),
		call(onSignOutStart),
		call(onSignUpStart),
		call(onSignUpSuccess)
	]);
}
