import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBVuF3mt4P7GMoMF0qxodWwAmaS18uhecY",
    authDomain: "ecommerce-service-8752f.firebaseapp.com",
    databaseURL: "https://ecommerce-service-8752f.firebaseio.com",
    projectId: "ecommerce-service-8752f",
    storageBucket: "ecommerce-service-8752f.appspot.com",
    messagingSenderId: "314280361070",
    appId: "1:314280361070:web:16203aa85c63fcd5f5fa7f",
    measurementId: "G-MH97QEPSBP"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message)
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;