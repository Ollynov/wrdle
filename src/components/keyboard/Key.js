export const Key = ({ onClick, value, isEnterOrDelete = false }) => {
  return (
    <button
      aria-label={`key`}
      className={`flex ${
        isEnterOrDelete ? "w-24" : "w-10"
      } h-10 items-center justify-center rounded mx-0.5 text-md font-bold cursor-pointer select-none bg-gray-300 m-3`}
      onClick={() => onClick(value)}
    >
      {value}
    </button>
  );
};
