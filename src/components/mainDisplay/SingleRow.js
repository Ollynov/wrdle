export const Cell = ({ value }) => {
  return (
    <div className="w-14 h-14 border-solid border-4 flex items-center justify-center mx-1 text-4xl   rounded">
      <div className="letter-container">{value}</div>
    </div>
  );
};

export const SingleRow = () => {
  const allCells = Array.from(Array(5));

  return (
    <div className="mb-1 flex justify-center">
      {allCells.map((_, i) => (
        <Cell key={i} />
      ))}
    </div>
  );
};
