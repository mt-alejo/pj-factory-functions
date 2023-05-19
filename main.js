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
  };

  return { render };
})();

document.querySelector("#btn-start").addEventListener("click", () => {
  gameContainer.style.display = "grid";
  setTimeout(function () {
    gameContainer.classList.add("show");
  }, 1000);
  Gameboard.render();
});
