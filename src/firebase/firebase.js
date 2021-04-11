import { firebaseConfig } from "./config";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const creatUserProfilDoc = async (userAuth, restData) => {
  if (!userAuth) {
    return;
  }

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapchat = await userRef.get();
  if (!snapchat.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();
    try {
      await userRef.set({ displayName, email, createAt, ...restData });
    } catch (error) {
      console.log(error);
    }
  }
  return userRef;
};

export const addCollectionAndDocuments = async (collectionkey, objToAdd) => {
  const collectionRef = firestore.collection(collectionkey);
  const batch = firestore.batch();

  objToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });
  return batch.commit();
};

export const convertCollectionSnapchatToMap = (collection) => {
  const transformedCollection = collection.docs.map((doc) => {
    const { title, items } = doc.data();
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });
  return transformedCollection.reduce((total, collection) => {
    total[collection.title.toLowerCase()] = collection;
    return total;
  }, {});
};

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
export const signInGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
