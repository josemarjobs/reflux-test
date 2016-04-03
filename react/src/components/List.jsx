var React = require('react')

var ListItem = require('./ListItem.jsx')
var IngredientForm = require('./IngredientForm.jsx')

var Reflux = require('reflux')
var Actions = require('../reflux/actions.jsx')
var IngredientStore = require('../reflux/ingredient-store.jsx')

var List = React.createClass({
  mixins: [Reflux.listenTo(IngredientStore, 'onChange')],

  getInitialState: function() {
      return {ingredients: []}
  },

  componentWillMount: function() {
    Actions.getIngredients()
  },

  onChange: function(evt, ingredients) {
    this.setState({ingredients: ingredients})
  },

  render: function() {
    var listItems = this.state.ingredients.map(function(item) {
      return <ListItem key={item.id} ingredient={item.text}/>;
    });
    return (
      <div className="panel panel-primary">
        <div className="panel-heading">Ingredients</div>
        <div className="panel-body row">
          <div className="col-md-8">
              <ul className="list-group">{listItems}</ul>
          </div>
          <div className="col-md-4">
            <IngredientForm />
          </div>
        </div>
      </div>
    )
  }
});

module.exports = List;
