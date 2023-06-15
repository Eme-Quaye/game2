window.onload = function () {
  let game = new Game();
  game.init();

  let startButton = document.querySelector(".start-button");
  let questions = document.getElementById("question");
  let options = document.getElementById("options");
  let startDiv = document.getElementById("start");

  function startGame() {
    startDiv.style.dipslay = "none";
    questions.style.display = "block";
    options.style.display = "block";
  }

  startButton.addEventListener("click", function () {
    startGame();
  });
};
