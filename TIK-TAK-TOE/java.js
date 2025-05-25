let turn = "X";
const win = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
document.querySelector(".turn").innerHTML="Harsh";
function har() {
  let tik = document.querySelectorAll(".tik");
  tik.forEach((tik) => (tik.innerHTML = ""));
}

document.querySelector(".reset").onclick = () => {
  har();
  console.log("Game reset");
  turn = "X"; // Reset to default player
};

let tik = document.querySelectorAll(".tik");

function harry() {
  turn = prompt("Player 1, enter your symbol (X or O):");
  turn = turn.toUpperCase();
  if (turn !== "X" && turn !== "O") {
    alert("Invalid input. Please enter X or O.");
    harry();
  }
}
harry();
console.log("Starting symbol:", turn);

tik.forEach((tik) => {
  tik.onclick = () => {
    if (tik.innerHTML === "") {
      tik.innerHTML = turn;
      if (checkWinner()) {
        setTimeout(() => {
          alert(`${turn} wins!`);
          har();
        }, 30);
      } else if (isDraw()) {
        setTimeout(() => {
          alert("It's a draw!");
          har();
        }, 30);
      } else {
        turn = turn === "X" ? "O" : "X"; // Switch turn
      }
    }
  };
});

function checkWinner() {
  for (let pat of win) {
    if (
      tik[pat[0]].innerHTML === tik[pat[1]].innerHTML &&
      tik[pat[1]].innerHTML === tik[pat[2]].innerHTML &&
      tik[pat[0]].innerHTML !== ""
    ) {
      return true;
    }
  }
  return false;
}

function isDraw() {
  for (let cell of tik) {
    if (cell.innerHTML === "") return false;
  }
  return true;
}
