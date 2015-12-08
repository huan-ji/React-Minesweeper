var React = require('react');

var Tile = React.createClass({
  handleClick: function (e) {
    var flagging;
    if (e.altKey) {
      flagging = true;
    } else {
      flagging = false;
    }
    this.props.update(this.props.tile, flagging);
  },

  render: function () {
    var show;
    var className = "tile";
    var tileStatus = this.props.tile;
    if (tileStatus.explored) {
      // debugger;
      if (tileStatus.bombed) {
        show = "💣";
        className += " bombed";
      } else if (tileStatus.adjacentBombCount() > 0) {

        show = " " + tileStatus.adjacentBombCount() + " ";
        className += " explored";
      }
    } else if (tileStatus.flagged) {
      show = "🚩";
      className += " flagged unexplored";
    } else {
      show = "  ";
      className += " unexplored";
    }
    return (
      <div className={className} onClick={this.handleClick}>{show}</div>
    );
  }
});

module.exports = Tile;
