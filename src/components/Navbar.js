import {
  IdentificationIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";

export const Navbar = () => {
  return (
    <div className="flex flex-row  py-6">
      <h1 className="text-3xl font-bold w-full m-auto">Wordle Clone</h1>
      <div className="w-20 flex flex-row right-4 fixed">
        <IdentificationIcon
          className="w-7 cursor-pointer mr-4"
          // onClick={() => setModal(true)}
        />
        <InformationCircleIcon
          className="w-7 cursor-pointer"
          // onClick={() => setModal(true)}
        />
      </div>
    </div>
  );
};