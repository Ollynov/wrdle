import { useState } from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Display } from "./components/mainDisplay/Display";
import { Keyboard } from "./components/keyboard/Keyboard";
import { WORD_SIZE, NUM_OF_ATTEMPTS } from "./data/constants";
import { ToastContainer, toast } from "react-toastify";
import { isWordValid, isWinner } from "./lib/functions";
import "react-toastify/dist/ReactToastify.css";
import Confetti from "react-confetti";

function App() {
  const [currentGuess, setCurrentGuess] = useState("");
  const [isGameOver, setGameOver] = useState(
    localStorage.getItem("isGameOver") || false
  );
  const [allGuesses, setGuesses] = useState(
    JSON.parse(localStorage.getItem("allGuesses")) || []
  );
  const [isAnimating, setIsAnimating] = useState(false);

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

    setIsAnimating(true);

    setTimeout(() => {
      setIsAnimating(false);
    }, 400 * WORD_SIZE);

    const isWinningWord = isWinner(currentGuess);

    console.log(isWinningWord);

    const temp = [...allGuesses, currentGuess];
    setGuesses(temp);
    localStorage.setItem("allGuesses", JSON.stringify(temp));
    setCurrentGuess("");
    console.log("ok temp lenth: ", temp.length);
    if (isWinningWord) {
      toast("Yay you won!");
      setGameOver("winner");
      localStorage.setItem("isGameOver", "winner");
      // do some confetti here
    } else if (temp.length === NUM_OF_ATTEMPTS) {
      // loser!
      console.log("ok in here...");
      toast("Oh no! You lost, better luck next time friend.");
      setGameOver("loser");
      localStorage.setItem("isGameOver", "loser");
    }
  };

  const reset = () => {
    setGameOver(false);
    setCurrentGuess("");
    setGuesses([]);
    localStorage.setItem("allGuesses", JSON.stringify([]));
    localStorage.setItem("letterStorage", JSON.stringify({}));
    localStorage.setItem("isGameOver", false);
  };

  const onDelete = () => {
    setCurrentGuess(currentGuess.split("").slice(0, -1).join(""));
  };
  return (
    <div className="App">
      <Navbar />
      <Display guess={currentGuess} allGuesses={allGuesses} />
      <Keyboard
        onType={onType}
        onDelete={onDelete}
        onEnter={onEnter}
        isAnimating={isAnimating}
      />
      {isGameOver === "winner" && (
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
      )}{" "}
      {isGameOver === "loser" && (
        <>
          <button
            type="button"
            className="mt-10 rounded-md bg-indigo-50 px-5 py-4 text-lg font-semibold text-indigo-600 shadow-sm hover:bg-indigo-100"
            onClick={reset}
          >
            Try Again
          </button>
        </>
      )}
      <ToastContainer />
    </div>
  );
}

export default App;
