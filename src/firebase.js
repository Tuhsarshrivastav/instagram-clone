import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
// paste your firebase cdn 
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
