import { WORD_SIZE } from "../../data/constants";

export const Cell = ({ value }) => {
  return (
    <div className="w-14 h-14 border-solid border-4 flex items-center justify-center mx-1 text-4xl rounded">
      <div className="letter-container">{value}</div>
    </div>
  );
};

const CellFilled = ({ value, letterPosition }) => {
  return (
    <div
      className={`w-14 h-14 border-solid border-4 flex items-center justify-center mx-1 text-4xl rounded ${
        letterPosition === "wrong position" ? "bg-gray-200" : "bg-green-100"
      }`}
    >
      <div className="letter-container">{value}</div>
    </div>
  );
};

export const SingleGuessedRow = ({ word }) => {
  const allCells = word ? word.split("") : Array.from(Array(WORD_SIZE));

  return (
    <div className="mb-1 flex justify-center">
      {allCells.map((letter, i) => (
        // status as truthy means that it's a correct letter guess, either in word or in the word+correct position
        <CellFilled key={i} value={letter} letterPosition={""} />
      ))}
    </div>
  );
};

export const SingleEmptyRow = () => {
  const allCells = Array.from(Array(WORD_SIZE));

  return (
    <div className="mb-1 flex justify-center">
      {allCells.map((letter, i) => (
        <Cell key={i} />
      ))}
    </div>
  );
};
