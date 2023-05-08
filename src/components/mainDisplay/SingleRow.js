import { WORD_SIZE } from "../../data/constants";
import { getLetterPositions } from "../../lib/functions";

export const Cell = ({ value }) => {
  return (
    <div className="w-14 h-14 border-solid border-4 flex items-center justify-center mx-1 text-4xl rounded">
      <div className="letter-container">{value}</div>
    </div>
  );
};

const CellFilled = ({ value, letterPosition }) => {
  let backgroundColor = "bg-gray-200";
  if (letterPosition === "wrong position") {
    backgroundColor = "bg-yellow-200";
  } else if (letterPosition === "correct position") {
    backgroundColor = "bg-green-200";
  }
  return (
    <div
      className={`w-14 h-14 border-solid border-4 flex items-center justify-center mx-1 text-4xl rounded ${backgroundColor}`}
    >
      <div className="letter-container">{value}</div>
    </div>
  );
};

export const SingleGuessedRow = ({ word }) => {
  const allCells = word ? word.split("") : Array.from(Array(WORD_SIZE));
  const letterPositions = getLetterPositions(word); // ['wrong position', 'invalid letter', 'correct position']

  return (
    <div className="mb-1 flex justify-center">
      {allCells.map((letter, i) => {
        return (
          <CellFilled
            key={i}
            value={letter}
            letterPosition={letterPositions[i]}
          />
        );
      })}
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
