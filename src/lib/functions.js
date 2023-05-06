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
