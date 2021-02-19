import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyDzPuMowrv_nTT9hsHKCW0vFpxlPge12DI',
	authDomain: 'shoppinggara-70ae0.firebaseapp.com',
	projectId: 'shoppinggara-70ae0',
	storageBucket: 'shoppinggara-70ae0.appspot.com',
	messagingSenderId: '699015041587',
	appId: '1:699015041587:web:71e2410979e6d927018946',
	measurementId: 'G-ZJ0RNBC2CD'
};

export const createUsrProfileDocuemnt = async (userAuth, additionUserData) => {
	if (!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);
	const snapshot = await userRef.get();

	if (!snapshot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionUserData
			});
		} catch (error) {
			console.log('error creating user', error.message);
		}
	}

	return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
	prompt: 'select_account'
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;