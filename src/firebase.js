/** @format */
import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOdXIEOFQUuxyFp0a6eDNjOz0oQ6OqNtU",
  authDomain: "slack-clone-70898.firebaseapp.com",
  databaseURL: "https://slack-clone-70898.firebaseio.com",
  projectId: "slack-clone-70898",
  storageBucket: "slack-clone-70898.appspot.com",
  messagingSenderId: "132941104879",
  appId: "1:132941104879:web:e7dd4f8014b205ecccbd1a",
  measurementId: "G-JNGB1WL532",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
