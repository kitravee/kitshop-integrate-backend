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

// async function get parameter
export const createUserProfileDocument = async (userAuth, additionalData) => {
  // if no user Auth exit function
  if (!userAuth) return;
  // from fire store there is 2 way to query 1 queryReference 2 querySnapshot; return object reference and snapshot reference (to detect is there data ?); ether Document or Collection

  // in order for us to create we use documentReference
  // to create, retrive, update, delete

  // snap shot represent the data
  // .get give us snapshotobject
  // documentRef.get() or collectionRef.get()
  // other CRUD .set()  .get()  .update()  .delete()

  const userRef = firestore.doc(`users/${userAuth.uid}`); //document reference
  const snapshot = await userRef.get();

  // exists to check weather or not that data exist in database
  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error create user", error.message);
    }
  }
  return userRef;
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};

// everything that relate to auth
export const auth = firebase.auth();

// fire store for firebase
export const firestore = firebase.firestore();

// USE CASE EXAMPLE for firestore (DB)
// firestore.collection("user").doc("SADQWDASDXCZXC").collection("cartItem");
// firestore.doc("/user/SADQWDASDXCZXC");
// firestore.collection("/user/SADQWDASDXCZXC/cartItem");

firebase.auth().useDeviceLanguage();

export const googleProvider = new firebase.auth.GoogleAuthProvider();

// The authorization server prompts the user to select a user account.
googleProvider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });
  console.log(transformedCollection);
  // convert to object
  return transformedCollection.reduce((acc, collection) => {
    acc[collection.title.toLowerCase()] = collection;
    return acc;
  }, {});
};

export default firebase;
