// import Toastify from "toastify-js";
// import "toastify-js/src/toastify.css";
import { auth, firestore } from "./firebase";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  browserPopupRedirectResolver,
} from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";

const googleProvider = new GoogleAuthProvider();

// const auth = getAuth();
export const createUser = async (uid, data) => {
  const docRef = doc(firestore, "users", uid);
  return setDoc(docRef, data, { merge: true })
    .then(() => {
      return "successfully saved";
    })
    .catch((err) => {
      console.log("error creating user: ", err);
      throw err;
    });
};

export const Signout = async () => {
  signOut(auth)
    .then((res) => {
      console.log("here we are: ", res);
    })
    .catch((error) => {
      console.log("ok here is err: ", error);
    });
};

export async function googleLogin() {
  // return signInWithPopup(auth, googleProvider)
  return signInWithPopup(auth, googleProvider, browserPopupRedirectResolver)
    .then((res) => {
      if (res.user.metadata.creationTime === res.user.metadata.lastSignInTime) {
        // check in case someone clicked on 'sign in' instead of 'signup' the first time, since in that case we should create new user:
        createUser(res.user.uid, {
          uid: res.user.uid,
          email: res.user.email,
          name: res.user.displayName,
        });
      }

      return res.user;
    })
    .catch((error) => {
      console.error("error logging in google user: ", error);
    });
}
