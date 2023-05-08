// import { Dialog, Transition } from "@headlessui/react";
// import { XCircleIcon } from "@heroicons/react/outline";
// import { Fragment } from "react";
import { BaseModal } from "./Default";
import { googleLogin } from "../../lib/auth";

const GoogleLoginButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      type="submit"
      className="btn-submit group relative bg-gray-200 h-12 w-1/4 mr-2"
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
  return (
    <BaseModal title={"Yo Gotti"} isOpen={isOpen} handleClose={handleClose}>
      <GoogleLoginButton onClick={googleLogin} />
    </BaseModal>
  );
};
