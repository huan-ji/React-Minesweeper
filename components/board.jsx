var React = require('react');
var Tile = require('./tile.jsx');

var Board = React.createClass({
  render: function () {
    var self = this;
    console.log(this.props.board);
    return (
      <div className="master">{
          this.props.board.grid.map(function (row, rowIdx) {
            return (
              <div key={rowIdx}>{
                row.map(function (tile, tileIdx) {
                  return <Tile key={tileIdx} tile={tile} update={self.props.update} />;
                })
              }
            </div>
            );
          })
        }
      </div>
    );
  }
});

module.exports = Board;
