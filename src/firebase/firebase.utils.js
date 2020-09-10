import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'

const config = {
        apiKey: "AIzaSyBMjsCYg_rIVvv8QSv5FyNzoFPXPhMJF0s",
        authDomain: "turtle-db-2363a.firebaseapp.com",
        databaseURL: "https://turtle-db-2363a.firebaseio.com",
        projectId: "turtle-db-2363a",
        storageBucket: "turtle-db-2363a.appspot.com",
        messagingSenderId: "1012935863077",
        appId: "1:1012935863077:web:6e71e44f85a74cf68088cc",
        measurementId: "G-9MFBHFF8GW"
}


export const createUserProfile = async (userAuth, additionalData) => {
        if(!userAuth) return;
        
        const userRef = firestore.doc(`users/${userAuth.uid}`)
        const snapShot = await userRef.get()

        if(!snapShot.exists) {
          const { displayName, email } = userAuth;
          const createdAt = new Date();

          try {
            await userRef.set({
              displayName,
              email,
              createdAt,
              ...additionalData
            })
          } catch(error) {
            console.log(error)
          }
        }
        return userRef;
        
}

firebase.initializeApp(config);

export const auth = firebase.auth()
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;