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

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
	prompt: 'select_account'
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
