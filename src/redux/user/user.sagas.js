import { call, put, takeLatest, all } from 'redux-saga/effects';
import * as actions from './user.actiontype';
import {
	createUsrProfileDocuemnt,
	auth,
	googleProvider,
	getCurrentUser
} from './../../firebase/firebase.utils';

import { signInSuccess, signInFail } from './user.action';

export function* getSnapshotFromUserAuth(user) {
	try {
		const userRef = yield call(createUsrProfileDocuemnt, user);
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

export function* userSagas() {
	yield all([
		call(onGoogleSigninStart),
		call(onEmailSigninStart),
		call(onCheckUserSession)
	]);
}
