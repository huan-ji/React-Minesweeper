var React = require('react');
var Minesweeper = require ('./minesweeper.js');
var Board = require ('./board.jsx');

var Game = React.createClass({
  getInitialState: function () {
    var newBoard = new Minesweeper.Board(10, 10);
    return { board: newBoard };
  },

  updateGame: function () {

  },

  render: function () {
    return (
      <Board board={this.state.board} update={this.updateGame} />
    );
  }
});

module.exports = Game;
