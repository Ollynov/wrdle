import { useEffect, useState } from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Display } from "./components/mainDisplay/Display";
import { Keyboard } from "./components/keyboard/Keyboard";

function App() {
  const [currentGuess, setCurrentGuess] = useState("");

  const onType = (e) => {
    console.log("ok got value: ", e);
    setCurrentGuess(`${currentGuess}${e}`);
  };

  const onEnter = () => {
    // check if good guess
    // record selection
    console.log("ok on enter");
  };

  const onDelete = () => {
    console.log("ok on delte");
  };
  return (
    <div className="App">
      <Navbar />
      <Display guess={currentGuess} />
      <Keyboard onType={onType} />
    </div>
  );
}

export default App;
