import { doc, updateDoc } from "firebase/firestore";

import { firestore } from "./firebase";

export async function saveGamePlayed(uid, user, result) {
  const currentStreak = result === "loss" ? 0 : (user.currentStreak || 0) + 1;
  const longestStreak = Math.max(currentStreak, user.longestStreak || 0);
  const gamesPlayed = user.gamesPlayed ? user.gamesPlayed + 1 : 1;

  // game status collects data on the wins and how many tries they took (1 - 5) or registers a loss
  // gameStatus {
  // 1: 3,
  // 2: 1
  // loss: 3
  //}
  let gameStatus = user.gameStatus || {};
  gameStatus[result] = (gameStatus[result] || 0) + 1;

  const documentRef = doc(firestore, "users", uid);
  updateDoc(documentRef, {
    gamesPlayed,
    currentStreak,
    longestStreak,
    gameStatus,
  });
}
