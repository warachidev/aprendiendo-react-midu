export const TURNS = {
  X: "x",
  O: "o",
};

export const WINNER_COMBOS = [
  [0, 1, 2], // first row
  [3, 4, 5], // second row
  [6, 7, 8], // third row
  [0, 3, 6], // first column
  [1, 4, 7], // second column
  [2, 5, 8], // third column
  [0, 4, 8], // diagonal from top-left
  [2, 4, 6], // diagonal from top-right
];
