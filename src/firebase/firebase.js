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
//hadi kathot lia data li fil file js fi firebase
export const addCollectionAndDocuments = async(collectionkey,objToAdd)=>{
  const collectionRef = firestore.collection(collectionkey)
  const batch = firestore.batch()

  objToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc() //hna kanhot id dial kolla abj ila doc() bka khawi kigerere id auto ila derna fiha chihaja kihot hadik lhaja 
    batch.set(newDocRef,obj)  // ohad lbatch katakhod blasa fin radi nhot data odata li hia obj 
  });
  return batch.commit() // hna katsenna hta kithat kolchi fihalat ila wka3 chi prb fi connection matalan had lcommit kiwakkef l3amalia 
}

//hadi katjib lia data men collection li fi firebase
export const convertCollectionSnapchatToMap = (collection)=>{
  const transformedCollection = collection.docs.map(doc=>{ //ohna docs kandir lihom map bach nakhod med data ghir title o items ctt
    const {title,items}=doc.data()
    return {
      routeName: encodeURI(title.toLowerCase()), //had encodeuri kathayed men title la kan fih espace ola chi horof fichi chkel
      id:doc.id,
      title,
      items,
    }
  })
  return transformedCollection.reduce((total,collection)=>{ // hna hawelt data li kanet array li object 
    total[collection.title.toLowerCase()]=collection;
    return total;
  },{})
  //ya3ni bhal hokka > [{title:mens,id:11,items[...]},{........},{......}]
  //mens:{id:11111,items:[....]}
  //hats:{id:555,items[.....]}
  //hada mital kiwaddeh kifach thawel men array li aobject :
      /* const arr =[{a:1},{a:2},{a:3}]
    const res = arr.reduce((total,obj)=>{
        return total['test']= obj
    },{})
    res= {test:{a:1},test:{a:2}} */
}

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
