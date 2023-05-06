import { NUM_OF_ATTEMPTS } from "./../../data/constants";
import { SingleRow } from "./SingleRow";

export const Display = () => {
  const standardRows = Array.from(Array(NUM_OF_ATTEMPTS));

  return (
    <div className="mt-8">
      {standardRows.map((_, i) => (
        <SingleRow key={i} />
      ))}
    </div>
  );
};
