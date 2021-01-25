import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBiH9FRwM_BtzUFbZs8_M-yFXTtmdW7WTI",
  authDomain: "crwn-bd-b60d0.firebaseapp.com",
  projectId: "crwn-bd-b60d0",
  storageBucket: "crwn-bd-b60d0.appspot.com",
  messagingSenderId: "222341021362",
  appId: "1:222341021362:web:7f2c5cb3e33e876a8f93ab",
  measurementId: "G-F7W6PCP8J1"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
