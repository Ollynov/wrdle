// import Toastify from "toastify-js";
// import "toastify-js/src/toastify.css";
import { auth } from "./firebase";
import {
  GoogleAuthProvider,
  signInWithPopup,
  browserPopupRedirectResolver,
} from "firebase/auth";

const googleProvider = new GoogleAuthProvider();

// const auth = getAuth();

export async function googleLogin() {
  // return signInWithPopup(auth, googleProvider)
  return signInWithPopup(auth, googleProvider, browserPopupRedirectResolver)
    .then((res) => {
      if (res.user) console.log("ok logged in user: ", res.user);

      return res.user;
    })
    .catch((error) => {
      console.error("error logging in google user: ", error);
    });
}
