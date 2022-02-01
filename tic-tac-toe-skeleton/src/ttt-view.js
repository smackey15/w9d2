class View {
  constructor(game, el) {
    this.game = game;
    this.el = el;
    this.setupBoard();
    this.handleClick = this.handleClick.bind(this)
    this.bindEvents();
    }

  setupBoard() {
    const ul = document.createElement("ul");
    this.el.appendChild(ul);
    for(let i = 0; i < 3; i++) {
      for(let j = 0; j < 3; j++) {
        let li = document.createElement("li");
        li.innerText = ""
        // li.dataset.row = i;
        // li.dataset.col = j;
        li.dataset.pos = [i, j];
        ul.appendChild(li);
          }
    }
    // debugger
  }
  
  // call on handleClick
  // 'install on board' refers to 
  bindEvents() {
    this.el.addEventListener("click", this.handleClick)
  }
  handleClick(e) {
    debugger
    this.makeMove(e.target);
  }
  
  makeMove(square) {
    debugger
    const pos = square.dataset.pos.split(',').map(el=> parseInt(el));
    const mark = this.game.currentPlayer;
    this.game.playMove(pos);
    square.innerText = mark;

  }

}

module.exports = View;
