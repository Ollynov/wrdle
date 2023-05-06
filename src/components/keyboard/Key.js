export const Key = ({ onClick, value, isEnterOrDelete = false }) => {
  return (
    <button
      aria-label={`key`}
      className={`flex ${
        isEnterOrDelete ? "w-20" : "w-8"
      } h-8 items-center justify-center rounded mx-0.5 text-xs font-bold cursor-pointer select-none bg-gray-300 m-4`}
      onClick={onClick}
    >
      {value}
    </button>
  );
};
