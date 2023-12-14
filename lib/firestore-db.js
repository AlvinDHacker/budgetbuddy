import { firebase, auth, db } from './firebase';
import { onAuthStateChanged } from "firebase/auth";
import { doc, setDoc } from 'firebase/firestore';

onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    // Call the function with the user and uid
    createUserCollection(user, uid);
  } else {
    // User is signed out
    // ...
  }
});

export function createUserCollection(user, uid) {
    // Use the firebase.firestore() to get the firestore instance
    // const firestore = firebase.firestore();
    
    // Reference to the 'users' collection and the specific document with the user's uid
    const userDocRef = doc(db, 'users', uid);

    // Set document data
    setDoc(userDocRef, {
        uid: user.uid,
        username: user.username, // Assuming user has a displayName property
        email: user.email,
        phone: '',
        age: '',
        marital_stat: '',
        child: '',
        gender: '',
    });
}
