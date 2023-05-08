// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  indexedDBLocalPersistence,
  browserLocalPersistence,
  browserSessionPersistence,
  initializeAuth,
} from "firebase/auth";

console.log("api: ", process.env);
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "wordle-af6b0.firebaseapp.com",
  projectId: "wordle-af6b0",
  storageBucket: "wordle-af6b0.appspot.com",
  messagingSenderId: "946592410942",
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

// Initialize Firebase
const firebaseApp = !getApps().length
  ? initializeApp(firebaseConfig)
  : getApp();

export const auth = initializeAuth(firebaseApp, {
  persistence: [
    indexedDBLocalPersistence,
    browserLocalPersistence,
    browserSessionPersistence,
  ],
});
