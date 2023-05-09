// import { Dialog, Transition } from "@headlessui/react";
// import { XCircleIcon } from "@heroicons/react/outline";
// import { Fragment } from "react";
import { BaseModal } from "./Default";
import { googleLogin, Signout } from "../../lib/auth";
import { useUserData } from "../../lib/authHook";
import { NUM_OF_ATTEMPTS } from "../../data/constants";

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

const Item = ({ header, value }) => {
  return (
    <div className="flex flex-start mx-4 my-2">
      <span>{header}</span> <span className="ml-4 font-bold">{value}</span>
    </div>
  );
};

export const StatsModal = ({ title, children, isOpen, handleClose }) => {
  let userData = useUserData();
  const numOfAttempts = Array.from(Array(NUM_OF_ATTEMPTS + 1)); // manually adding one here because we want to loop over our "loss" data as well;

  let successRate = 0;
  if (userData?.userData?.gamesPlayed) {
    successRate =
      ((userData.userData.gamesPlayed -
        (userData.userData.gameStatus["loss"] || 0)) /
        userData.userData.gamesPlayed) *
      100;
  }

  return (
    <BaseModal isOpen={isOpen} handleClose={handleClose}>
      {userData?.userData?.gamesPlayed ? (
        <>
          <h1 className="my-4 font-bold text-lg">
            {userData?.user?.displayName} Stats
          </h1>
          <div className="flex flex-col">
            <Item header="Games Played" value={userData.userData.gamesPlayed} />
            <Item
              header="Current Streak"
              value={userData.userData.currentStreak}
            />
            <Item
              header="Longest Streak"
              value={userData.userData.longestStreak}
            />
            <Item header="Success %" value={successRate || "0%"} />
            <h3 className="my-4 font-bold  text-lg">Success Breakdown</h3>
            {numOfAttempts.map((_, i) => {
              return (
                <Item
                  key={i}
                  header={
                    i === numOfAttempts.length - 1
                      ? `Losses`
                      : `${i + 1} guesses`
                  }
                  value={
                    i === numOfAttempts.length - 1
                      ? userData.userData.gameStatus["loss"] || 0
                      : userData.userData.gameStatus[i + 1] || 0
                  }
                />
              );
            })}
          </div>
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
