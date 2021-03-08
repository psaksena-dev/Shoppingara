import { all, put, takeLatest, call } from 'redux-saga/effects';
import * as UserActions from './../user/user.actiontype';
import { clearCart } from './cart.action';

export function* clearCartOnSignOut() {
	yield put(clearCart());
}

export function* onSignOutSuccess() {
	yield takeLatest(UserActions.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}
export function* cartSagas() {
	yield all([call(onSignOutSuccess)]);
}
