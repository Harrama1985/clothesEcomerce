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

  //add new user to firestore
export const creatUserProfilDoc = async (userAuth, restData)=>{
    
  if(!userAuth){ //__________________________________
      return;
    }
    
    const userRef = firestore.doc(`users/${userAuth.uid}`) // hadi katcree lia wahed ref kathot fih uid 
    const snapchat = await userRef.get() // hadi katjib hadak ref om3ah exist wach true ola false 
    if(!snapchat.exists){ // ohna kancheker wach exsit true ola false 
        const {displayName , email} = userAuth;
        const createAt = new Date()
        try {
          await userRef.set({displayName,email,createAt,...restData})
        } catch (error) {
          console.log(error);
        }
    }
    return userRef
}

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
