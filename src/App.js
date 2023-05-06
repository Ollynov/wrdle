import { useEffect, useState } from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Display } from "./components/mainDisplay/Display";
import { Keyboard } from "./components/keyboard/Keyboard";
import { WORD_SIZE } from "./data/constants";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

    if (currentGuess.length !== WORD_SIZE) {
      return toast("Not enough letters for guess");
    }
  };

  const onDelete = () => {
    setCurrentGuess(currentGuess.split("").slice(0, -1).join(""));
  };
  return (
    <div className="App">
      <Navbar />
      <Display guess={currentGuess} />
      <Keyboard onType={onType} onDelete={onDelete} onEnter={onEnter} />
      <ToastContainer />
    </div>
  );
}

export default App;
