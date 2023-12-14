// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDi5c0c8ACjAHra0eN4NAAnvBY6tpOXKKc",
  authDomain: "financify-d8ff9.firebaseapp.com",
  projectId: "financify-d8ff9",
  storageBucket: "financify-d8ff9.appspot.com",
  messagingSenderId: "182009188156",
  appId: "1:182009188156:web:4d959c9ce42d08d7e65839",
  measurementId: "G-JF3WKWD5TG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

// export const createUserDocument = async (user, additionalData) => {
//   if (!user) return;

//   const userRef = firestore.doc(`users/$(user.uid)`);
//   const snapshot = await userRef.get();

//   if (!snapshot.exists) {
//     const { email } = user;
//     const { displayName } = additionalData;
//     try {
//       userRef.set({
//         displayName,
//         email,
//         createdAt: new Date(),
//       });
//     } catch (error) {
//       console.log("Error in creating user", error);
//     }
//   }
// };
