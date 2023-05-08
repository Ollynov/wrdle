import { NUM_OF_ATTEMPTS } from "./../../data/constants";
import { SingleGuessedRow, SingleEmptyRow } from "./SingleRow";
import { ActiveRow } from "./ActiveRow";

export const Display = ({ guess, allGuesses }) => {
  const emptyRows = Array.from(Array(NUM_OF_ATTEMPTS - allGuesses.length - 1));

  return (
    <div className="mt-8">
      {allGuesses.map((word, i) => (
        <SingleGuessedRow word={word} key={i} />
      ))}
      {allGuesses.length < NUM_OF_ATTEMPTS && <ActiveRow guess={guess} />}
      {emptyRows.map((_, i) => (
        <SingleEmptyRow key={i} />
      ))}
    </div>
  );
};
