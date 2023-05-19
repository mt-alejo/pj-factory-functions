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
    boxes.forEach((box) =>
      box.addEventListener("click", () => console.log("Works"))
    );
  };

  return { render };
})();

document.querySelector("#btn-start").addEventListener("click", () => {
  gameContainer.style.display = "grid";
  setTimeout(function () {
    gameContainer.classList.add("show");
  }, 500);
  Gameboard.render();
});
