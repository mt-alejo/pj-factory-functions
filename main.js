const gameContainer = document.querySelector("#game-container");

const Gameboard = (() => {
  let gameboard = ["", "", "", "", "", "", "", "", ""];

  const render = () => {
    let boardHTML = "";
    gameboard.forEach(
      (box, index) =>
        (boardHTML += `<div class="game-box" id="box-${index}">${box}</div>`)
    );
    gameContainer.innerHTML = boardHTML;
    console.log("Rendering");

    const boxes = document.querySelectorAll(".game-box");
    boxes.forEach((box) => box.addEventListener("click", Game.handleClick));
  };

  const update = (index, signal) => {
    gameboard[index] = signal;
    render();
  };

  const getGameboard = () => gameboard;

  return { render, getGameboard, update };
})();

const createPlayer = (name, signal) => {
  return { name, signal };
};

const Game = (() => {
  let players = [];
  let currentPlayerIndex;
  let gameOver;

  const start = () => {
    players = [createPlayer("Dante", "X"), createPlayer("Garu", "O")];
  };

  const handleClick = (event) => {
    const [, index] = event.target.id.split("-");
    if (Gameboard.getGameboard()[index] !== "") {
      return;
    } else {
      currentPlayerIndex === 0
        ? (currentPlayerIndex = 1)
        : (currentPlayerIndex = 0);
    }
    Gameboard.update(index, players[currentPlayerIndex].signal);
    if (checkForWinner(Gameboard.getGameboard())) {
      console.log(`Winner: ${players[currentPlayerIndex].name}`);
    }
  };

  return { start, handleClick };
})();

const checkForWinner = (gameboard) => {
  const winCombination = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < winCombination.length; i++) {
    const [a, b, c] = winCombination[i];
    if (
      gameboard[a] &&
      gameboard[a] === gameboard[b] &&
      gameboard[a] === gameboard[c]
    ) {
      return true;
    }
  }

  return false;
};

document.querySelector("#btn-start").addEventListener("click", () => {
  gameContainer.style.display = "grid";
  setTimeout(function () {
    gameContainer.classList.add("show");
  }, 100);
  Gameboard.render();
  Game.start();
});
