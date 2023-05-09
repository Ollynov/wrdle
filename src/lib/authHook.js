import { auth, firestore } from "./firebase";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { doc, onSnapshot } from "firebase/firestore";

// Custom hook to read  auth record and user profile doc
export function useUserData() {
  const [user] = useAuthState(auth);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // turn off realtime subscription
    let unsubscribe;

    if (user) {
      const documentRef = doc(firestore, "users", user.uid);
      unsubscribe = onSnapshot(documentRef, (resp) => {
        console.log("ok on unsubscribe we got dis back: ", resp.data());
        setUserData(resp.data());
      });
    } else {
      setUserData(null);
    }

    return unsubscribe;
  }, [user]);

  return {
    user,
    userData,
  };
}
