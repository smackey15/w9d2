class View {
  constructor(game, el) {
    this.game = game;
    this.el = el;
  }

  setupBoard() {
    const ul = document.createElement("ul");
    this.el.appendChild(ul);
    for(let i = 0; i < 3; i++) {
      for(let j = 0; j < 3; j++) {
        let li = document.createElement("li");
        li.dataset.value = "_"
        li.dataset.row = i;
        li.dataset.col = j;
        // li.dataset.pos = [i, j];
        ul.appendChild(li);
          }
    }
    // debugger
  }
  
  bindEvents() {}

  handleClick(e) {}

  makeMove(square) {}

}

module.exports = View;
