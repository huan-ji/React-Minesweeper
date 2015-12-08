var React = require('react');
var Minesweeper = require ('./minesweeper.js');
var Board = require ('./board.jsx');

var Game = React.createClass({
  getInitialState: function () {
    var newBoard = new Minesweeper.Board(10, 10);
    return { board: newBoard, className: "modal" };
  },

  updateGame: function (tile, flagging) {
    if (flagging) {
      tile.toggleFlag();
    } else {
      tile.explore();
    }
    // debugger;
    this.setState({ board: this.state.board });
  },

  restart: function (e) {
    var newBoard = new Minesweeper.Board(10, 10);
    this.setState({ board: newBoard, className: "modal" });
  },

  checkWin: function () {
    if (this.state.board.won()) {
      this.setState({ className: "modal is-active" });
      return "You won!";
    } else if (this.state.board.lost()) {
      this.state.className = "modal is-active";
      return "You lost!";
    }
  },

  render: function () {
    var winStatus = this.checkWin();
    return (
      <div>
        <Board board={this.state.board} update={this.updateGame} />
        <section id="modal" className={this.state.className}>
          <article className="modal-content">
            <h1>{winStatus}</h1>
            <button onClick={this.restart}>Restart Game</button>
          </article>
          <div className="modal-screen"></div>
        </section>
      </div>

    );
  }
});

module.exports = Game;
