import { useEffect, useState } from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Display } from "./components/mainDisplay/Display";
import { Keyboard } from "./components/keyboard/Keyboard";
import { WORD_SIZE } from "./data/constants";
import { ToastContainer, toast } from "react-toastify";
import { isWordValid, isWinner } from "./lib/functions";
import "react-toastify/dist/ReactToastify.css";
import Confetti from "react-confetti";

function App() {
  const [currentGuess, setCurrentGuess] = useState("");
  const [isGameOver, setGameOver] = useState(false);
  const [allGuesses, setGuesses] = useState([]);

  const onType = (e) => {
    console.log("ok got value: ", e);
    if (currentGuess.length < WORD_SIZE) {
      // only do something if the user hasn't already filled out the full row
      setCurrentGuess(`${currentGuess}${e}`);
    }
  };

  const onEnter = () => {
    if (currentGuess.length !== WORD_SIZE) {
      return toast("Not enough letters for guess");
    }

    if (!isWordValid(currentGuess)) {
      return toast("Not a valid word");
    }

    const isWinningWord = isWinner(currentGuess);

    console.log(isWinningWord);

    if (isWinningWord) {
      toast("Yay you won!");
      setGameOver(true);
      // do some confetti here
    } else {
      setGuesses([...allGuesses, currentGuess]);
      setCurrentGuess("");
      // set the guess, and move onto the next row
    }
  };

  const reset = () => {
    setGameOver(false);
    setCurrentGuess("");
  };

  const onDelete = () => {
    setCurrentGuess(currentGuess.split("").slice(0, -1).join(""));
  };
  return (
    <div className="App">
      <Navbar />
      <Display guess={currentGuess} allGuesses={allGuesses} />
      <Keyboard onType={onType} onDelete={onDelete} onEnter={onEnter} />
      {isGameOver && (
        <>
          <button
            type="button"
            className="mt-10 rounded-md bg-indigo-50 px-5 py-4 text-lg font-semibold text-indigo-600 shadow-sm hover:bg-indigo-100"
            onClick={reset}
          >
            Play Again
          </button>
          <Confetti
            width={"1000px"}
            height={"900"}
            style={{ margin: "auto" }}
          />
        </>
      )}

      <ToastContainer />
    </div>
  );
}

export default App;
