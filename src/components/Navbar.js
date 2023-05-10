import { IdentificationIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { StatsModal } from "./modals/Stats";

export const Navbar = () => {
  const [statsModal, setStatsModal] = useState(false);

  return (
    <div className="flex flex-row  py-6">
      <h1 className="text-3xl font-bold w-full m-auto">Wordle Clone</h1>
      <div className="w-20 flex flex-row right-4 absolute">
        <IdentificationIcon
          className="w-7 cursor-pointer mr-4"
          onClick={() => setStatsModal(true)}
        />
      </div>
      <StatsModal
        isOpen={statsModal}
        handleClose={() => setStatsModal(false)}
      />
    </div>
  );
};
