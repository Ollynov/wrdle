// import { Dialog, Transition } from "@headlessui/react";
// import { XCircleIcon } from "@heroicons/react/outline";
// import { Fragment } from "react";
import { BaseModal } from "./Default";

export const StatsModal = ({ title, children, isOpen, handleClose }) => {
  return (
    <BaseModal title={"Yo Gotti"} isOpen={isOpen} handleClose={handleClose}>
      <h1>hi there</h1>
    </BaseModal>
  );
};
