import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDLfzmmmN-OXvLRzkYQ2lFL1036MQJTNB4",
    authDomain: "react-learning-db-221dc.firebaseapp.com",
    projectId: "react-learning-db-221dc",
    storageBucket: "react-learning-db-221dc.appspot.com",
    messagingSenderId: "896535120359",
    appId: "1:896535120359:web:9dd4cd93d44b0d811cd542"
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

export const createUserProfileDocument = async (userAuth, additional) => {
    if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    if(!snapShot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();
        try{
            await userRef.set({
                displayName,email,createdAt,
                ...additional
            })
        } catch(e) {
            console.log(e);
        }
    }
    return userRef;
}