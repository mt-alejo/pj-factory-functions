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

  return { render };
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
    currentPlayerIndex === 0
      ? (currentPlayerIndex = 1)
      : (currentPlayerIndex = 0);
    console.log(players[currentPlayerIndex].signal, index);
  };

  return { start, handleClick };
})();

document.querySelector("#btn-start").addEventListener("click", () => {
  gameContainer.style.display = "grid";
  setTimeout(function () {
    gameContainer.classList.add("show");
  }, 100);
  Gameboard.render();
  Game.start();
});
