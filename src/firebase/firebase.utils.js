import firebase from "firebase/app";
// attach to firebase keyword
import "firebase/firestore";
import "firebase/auth";

// https://firebase.google.com/docs/auth/web/google-signin

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBLL21gVuPtIC5kgIiwStTsIHDKsSHDEc",
  authDomain: "crwn-db-5bc4f.firebaseapp.com",
  databaseURL: "https://crwn-db-5bc4f.firebaseio.com",
  projectId: "crwn-db-5bc4f",
  storageBucket: "crwn-db-5bc4f.appspot.com",
  messagingSenderId: "163208792545",
  appId: "1:163208792545:web:74d5fdc4c31483367faaa0",
  measurementId: "G-VFXKJ14CL2",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// everything that relate to auth
export const auth = firebase.auth();

// fire store for firebase
export const firestore = firebase.firestore();

firebase.auth().useDeviceLanguage();

const provider = new firebase.auth.GoogleAuthProvider();

// The authorization server prompts the user to select a user account.
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
