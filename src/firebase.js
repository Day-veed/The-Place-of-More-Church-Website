import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyChVfTtP011nW0nStmAFgVSH0DoxHx8ce8",
    authDomain: "the-place-of-more.firebaseapp.com",
    projectId: "the-place-of-more",
    storageBucket: "the-place-of-more.appspot.com",
    messagingSenderId: "12135652007",
    appId: "1:12135652007:web:733bab24869a96ef00d982",
    measurementId: "G-ME2JEQQCYT"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = getStorage(firebaseApp);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
export { db, auth, storage, timestamp};