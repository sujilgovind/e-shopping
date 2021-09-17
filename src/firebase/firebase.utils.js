import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyAl7Li2WsKZDFloN_OmTCJ_ZEuFSR37Smc",
    authDomain: "eshopping-101.firebaseapp.com",
    projectId: "eshopping-101",
    storageBucket: "eshopping-101.appspot.com",
    messagingSenderId: "951146022536",
    appId: "1:951146022536:web:c82190d4e01be7ea3c413d",
    measurementId: "G-7YF1HW45NR"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;