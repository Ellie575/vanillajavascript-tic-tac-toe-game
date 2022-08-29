const X_CLASS = "x";
const CIRCLE_CLASS = "circle";
const cellElements = document.querySelectorAll("[data-cell");
let circleTurn;
const board = document.getElementById("board");

cellElements.forEach((cell) => {
  cell.addEventListener("click", handleClick, { once: true });
});

function handleClick(event) {
  const cell = event.target;
  const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS;
  placeMark(cell, currentClass);
  // Check for win
  // Check or draw
  // Switch Turns
  swapTurns();
  setBoardHoverClass();
}

function placeMark(cell, currentClass) {
  cell.classList.add(currentClass);
}

function swapTurns() {
  circleTurn = !circleTurn;
}

function setBoardHoverClass() {
  board.classList.remove(X_CLASS);
  board.classList.remove(CIRCLE_CLASS);
  if (circleTurn) {
    board.classList.add(CIRCLE_CLASS);
  } else {
    board.classList.add(X_CLASS);
  }
}
