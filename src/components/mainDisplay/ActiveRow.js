import { Cell } from "./SingleRow";
import { WORD_SIZE } from "../../data/constants";

export const ActiveRow = ({ guess, className = "" }) => {
  const wordsLeft = Array.from(Array(WORD_SIZE - guess.length));
  const classes = `flex justify-center mb-1 ${className}`;

  return (
    <div className={classes}>
      {guess.split("").map((letter, i) => (
        <Cell key={i} value={letter} />
      ))}
      {wordsLeft.map((_, i) => (
        <Cell key={i} />
      ))}
    </div>
  );
};
