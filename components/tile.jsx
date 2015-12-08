var React = require('react');
💣🚩🚩🚩🚩🚩
var Tile = React.createClass({
  render: function () {
    var tileStatus = this.props.tile;
    if (tileStatus.explored) {

    } else if (tileStatus.bombed) {

    }
    return (
      <div className="tile">💣</div>
    );
  }
});

module.exports = Tile;
