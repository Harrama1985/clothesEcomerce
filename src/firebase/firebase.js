import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


var firebaseConfig = {
    apiKey: "AIzaSyCJxc407bgQ5Gy_EGqZSodBdwdf2TvPl6Q",
    authDomain: "clothesecomerce.firebaseapp.com",
    databaseURL: "https://clothesecomerce.firebaseio.com",
    projectId: "clothesecomerce",
    storageBucket: "clothesecomerce.appspot.com",
    messagingSenderId: "1013786528909",
    appId: "1:1013786528909:web:8da5e4bb0edeada12ae6c4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
