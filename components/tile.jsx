var React = require('react');

var Tile = React.createClass({
  handleClick: function (e) {
    e.preventDefault();
    var options;
    if (e.altKey) {
      options = "flagging";
    } else {
      options = "revealing";
    }
    this.props.update(this.props.tile, options);
  },

  render: function () {
    var show;
    var className = "tile";
    var tileStatus = this.props.tile;
    if (tileStatus.explored) {
      if (tileStatus.bombed) {
        show = "💣";
        className += " bombed";
      } else if (tileStatus.adjacentBombCount > 0) {
        show = tileStatus.adjacentBombCount;
        className += " explored";
      }
    } else if (tileStatus.flagged) {
      show = "🚩";
      className += " flagged";
    } else {
      show = "  ";
    }
    return (
      <div className={className} onClick={this.handleClick}>{show}</div>
    );
  }
});

module.exports = Tile;
