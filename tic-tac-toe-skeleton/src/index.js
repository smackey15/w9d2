const View = require("./ttt-view.js") // the dot denotes we start in the same folder that index.js is in
const Game = require("/ttt_node/game.js")

document.addEventListener("DOMContentLoaded", () => {
  const g = new Game();
  const ttt = document.querySelector(".ttt")
  const v = new View(g, ttt);
});

