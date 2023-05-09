// import { Dialog, Transition } from "@headlessui/react";
// import { XCircleIcon } from "@heroicons/react/outline";
// import { Fragment } from "react";
import { BaseModal } from "./Default";
import { googleLogin, Signout } from "../../lib/auth";
import { useUserData } from "../../lib/authHook";

const GoogleLoginButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      type="submit"
      className="btn-submit group relative bg-gray-200 h-12 w-1/4 mr-2 rounded-lg mt-6"
    >
      <span className="inset-y-0 flex items-center">
        <img
          className="mx-auto h-auto w-8"
          src="/google-icon.png"
          alt="Login with Google"
        />
      </span>
    </button>
  );
};

export const StatsModal = ({ title, children, isOpen, handleClose }) => {
  let userData = useUserData();

  console.log("ok got this data: ", userData);

  return (
    <BaseModal isOpen={isOpen} handleClose={handleClose}>
      {userData?.user?.displayName ? (
        <>
          <h1>{userData.user.displayName} Stats</h1>
          <button
            onClick={Signout}
            href="#"
            className="bg-slate-500 mt-8 p-3 m-auto rounded-md text-base font-medium text-white hover:bg-slate-700 focus:outline-none focus:text-white focus:bg-gray-700"
          >
            Sign out
          </button>
        </>
      ) : (
        <>
          <h1>Login / Signup</h1>
          <GoogleLoginButton onClick={googleLogin} />
        </>
      )}
    </BaseModal>
  );
};
