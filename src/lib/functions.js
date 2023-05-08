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

export const isWinner = (word) => {
  return word.toLowerCase() === getSolution();
};

export const getLetterPositions = (word) => {
  const solution = getSolution();
  console.log("solution: ", solution);
  let letterPositions = [];
  word = word.toLowerCase();

  for (var i = 0; i < word.length; i++) {
    if (solution[i] === word[i]) {
      letterPositions.push("correct position");
    } else if (solution.includes(word[i])) {
      letterPositions.push("wrong position");
    } else {
      letterPositions.push("invalid letter");
    }
  }

  return letterPositions;
};
