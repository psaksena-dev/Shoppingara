import SHOP_ACTION_TYPES from './shop.actiontype';
import {
	firestore,
	convertCollectionsSnapshotToMap
} from './../../firebase/firebase.utils';

export const fetchCollectionStart = () => ({
	type: SHOP_ACTION_TYPES.FETCH_COLLECTION_START
});

export const fetchCollectionSuccess = (collectionMap) => ({
	type: SHOP_ACTION_TYPES.FETCH_COLLECTION_SUCCESS,
	payload: collectionMap
});

export const fetchCollectionFailure = (errorMessage) => ({
	type: SHOP_ACTION_TYPES.FETCH_COLLECTION_FAILURE,
	payload: errorMessage
});

// export const fetchCollectionStartAsync = () => {
// 	return (dispatch) => {
// 		const collectionRef = firestore.collection('collections');
// 		dispatch(fetchCollectionStart());

// 		collectionRef
// 			.get()
// 			.then((snapshot) => {
// 				const collectionMap = convertCollectionsSnapshotToMap(snapshot);
// 				dispatch(fetchCollectionSuccess(collectionMap));
// 			})
// 			.catch((error) => {
// 				dispatch(fetchCollectionFailure(error.message));
// 			});
// 	};
// };
