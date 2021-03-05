import { call, put, takeLatest } from 'redux-saga/effects';
import SHOP_ACTION_TYPES from './shop.actiontype';
import {
	firestore,
	convertCollectionsSnapshotToMap
} from './../../firebase/firebase.utils';
import { fetchCollectionSuccess, fetchCollectionFailure } from './shop.action';

export function* fetchCollectionsStartAsync() {
	console.log('in saga');
	try {
		const collectionRef = firestore.collection('collections');
		const snapshot = yield collectionRef.get();
		const collectionMap = yield call(convertCollectionsSnapshotToMap, snapshot);
		yield put(fetchCollectionSuccess(collectionMap));
	} catch (error) {
		yield put(fetchCollectionFailure(error.message));
	}
}

export function* fetchCollectionsStart() {
	yield takeLatest(
		SHOP_ACTION_TYPES.FETCH_COLLECTION_START,
		fetchCollectionsStartAsync
	);
}
