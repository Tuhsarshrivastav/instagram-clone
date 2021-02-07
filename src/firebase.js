import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDh9vxkQu-0xpQSAkyIAV7odbv8FYwjw0I",
  authDomain: "instagram-clone-27901.firebaseapp.com",
  projectId: "instagram-clone-27901",
  storageBucket: "instagram-clone-27901.appspot.com",
  messagingSenderId: "877153298318",
  appId: "1:877153298318:web:442335ab781731759026df",
  measurementId: "G-W2EEBZ2RJG",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
