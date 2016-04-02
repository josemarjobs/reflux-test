var React = require('react');

var ListItem = React.createClass({
  render: function() {
    return (
      <li className="list-group-item">
        <h4>{this.props.ingredient}</h4>
      </li>
    );
  }
});

module.exports = ListItem;
