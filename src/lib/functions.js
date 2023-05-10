import { ALL_WORDS } from "./../data/allWords";

export const isWordValid = (word) => {
  return ALL_WORDS.includes(word.toLowerCase());
};

const getSolution = () => {
  const month = new Date().getMonth();
  const day = new Date().getDay();
  const index = "" + month + day;

  return ALL_WORDS[index];
};

const getRandSolution = () => {
  const randIdx = Math.floor(Math.random() * ALL_WORDS.length);

  return ALL_WORDS[randIdx];
};

export const isWinner = (word) => {
  return word.toLowerCase() === getSolution();
};

export const getLetterPositions = (word) => {
  const solution = getSolution();
  let letterPositions = [];
  word = word.toLowerCase();
  let letterStorage = JSON.parse(localStorage.getItem("letterStorage")) || {};

  for (var i = 0; i < word.length; i++) {
    let status = "invalid letter";
    if (solution[i] === word[i]) {
      status = "correct position";
    } else if (solution.includes(word[i])) {
      status = "wrong position";
    }
    letterStorage[word[i]] = status;
    letterPositions.push(status);
  }

  localStorage.setItem("letterStorage", JSON.stringify(letterStorage));

  return letterPositions;
};

export const returnBackgroundColor = (letterPosition) => {
  let backgroundColor = "bg-gray-300";
  if (letterPosition === "wrong position") {
    backgroundColor = "bg-yellow-200";
  } else if (letterPosition === "correct position") {
    backgroundColor = "bg-green-200";
  }

  return backgroundColor;
};
