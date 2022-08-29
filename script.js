const cellElements = document.querySelectorAll("[data-cell");

cellElements.forEach((cell) => {
  cell.addEventListener("click", handleClick, { once: true });
});

function handleClick(event) {
  // placeMark
  // Check for win
  // Check or draw
  // Switch Turns
}
