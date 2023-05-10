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
import { saveGamePlayed } from "./lib/userService";
import { useUserData } from "./lib/authHook";

function App() {
  const [currentGuess, setCurrentGuess] = useState("");
  const [isGameOver, setGameOver] = useState(
    localStorage.getItem("isGameOver") || "not started"
  ); // winner, loser, or not started
  const [allGuesses, setGuesses] = useState(
    JSON.parse(localStorage.getItem("allGuesses")) || []
  );
  const [isAnimating, setIsAnimating] = useState(false);
  let userData = useUserData();

  const onType = (e) => {
    if (isGameOver === "not started" && currentGuess.length < WORD_SIZE) {
      // only do something if the user hasn't already filled out the full row
      setCurrentGuess(`${currentGuess}${e}`);
    }
  };

  const onEnter = () => {
    if (isGameOver !== "not started") {
      return; // no reason to respond to button click if game is over
    }

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

    const temp = [...allGuesses, currentGuess];
    setGuesses(temp);
    localStorage.setItem("allGuesses", JSON.stringify(temp));
    setCurrentGuess("");

    if (isWinningWord) {
      // winner!
      toast("Yay you won!");
      setGameOver("winner");
      localStorage.setItem("isGameOver", "winner");
      // do some confetti here
      if (userData?.user?.uid) {
        saveGamePlayed(
          userData.user.uid,
          userData.userData,
          allGuesses.length + 1
        );
      }
    }

    if (temp.length === NUM_OF_ATTEMPTS && !isWinningWord) {
      // loser!
      toast("Oh no! You lost, better luck next time friend.");
      setGameOver("loser");
      localStorage.setItem("isGameOver", "loser");
      if (userData?.user?.uid) {
        saveGamePlayed(userData.user.uid, userData.userData, "loss");
      }
    }
  };

  const reset = () => {
    setGameOver("not started");
    setCurrentGuess("");
    setGuesses([]);
    localStorage.setItem("allGuesses", JSON.stringify([]));
    localStorage.setItem("letterStorage", JSON.stringify({}));
    localStorage.setItem("isGameOver", "not started");
  };

  const onDelete = () => {
    if (isGameOver !== "not started") {
      return; // no reason to respond to button click if game is over
    }
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
          {/* Seems the wordle game onnly allows for one daily play */}
          {/* <button
            type="button"
            className="mt-10 rounded-md bg-indigo-50 px-5 py-4 text-lg font-semibold text-indigo-600 shadow-sm hover:bg-indigo-100"
            onClick={reset}
          >
            Play Again
          </button> */}
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
