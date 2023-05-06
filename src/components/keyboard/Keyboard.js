import { Key } from "./Key";

export const Keyboard = ({ onEnter, onDelete }) => {
  return (
    <div>
      <div className="flex justify-center">
        {["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"].map((key) => (
          <Key value={key} key={key} />
        ))}
      </div>
      <div className="flex justify-center">
        {["A", "S", "D", "F", "G", "H", "J", "K", "L"].map((key) => (
          <Key value={key} key={key} />
        ))}
      </div>
      <div className="flex justify-center">
        <Key value="ENTER" onClick={onEnter} isEnterOrDelete={true}>
          Enter
        </Key>
        {["Z", "X", "C", "V", "B", "N", "M"].map((key) => (
          <Key value={key} key={key} />
        ))}
        <Key value="DELETE" onClick={onDelete} isEnterOrDelete={true}>
          Delete
        </Key>
      </div>
    </div>
  );
};