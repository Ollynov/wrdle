import { useEffect } from "react";
import { NUM_OF_ATTEMPTS } from "./../../data/constants";
import { SingleRow } from "./SingleRow";
import { ActiveRow } from "./ActiveRow";

export const Display = ({ guess }) => {
  const standardRows = Array.from(Array(NUM_OF_ATTEMPTS));

  useEffect(() => {
    console.log("ok current guess: ", guess);
  }, [guess]);

  return (
    <div className="mt-8">
      <ActiveRow guess={guess} />
      {standardRows.map((_, i) => (
        <SingleRow key={i} />
      ))}
    </div>
  );
};
