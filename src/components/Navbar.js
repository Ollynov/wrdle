import {
  IdentificationIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";

export const Navbar = () => {
  return (
    <div className="flex flex-row">
      <h1 className="text-3xl font-bold ">Wordle Clone</h1>
      <div>
        <IdentificationIcon
          className="mr-3 h-6 w-6 cursor-pointer"
          // onClick={() => setModal(true)}
        />
        <InformationCircleIcon
          className="h-6 w-6 cursor-pointer"
          // onClick={() => setModal(true)}
        />
      </div>
    </div>
  );
};
