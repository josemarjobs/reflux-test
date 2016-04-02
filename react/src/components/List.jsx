var React = require('react')
var ListItem = require('./ListItem.jsx')
var Reflux = require('reflux')
var Actions = require('../reflux/actions.jsx')
var IngredientStore = require('../reflux/ingredient-store.jsx')

var List = React.createClass({
  mixins: [Reflux.listenTo(IngredientStore, 'onChange')],

  getInitialState: function() {
      return {ingredients: [], newText: ""}
  },

  componentWillMount: function() {
    Actions.getIngredients()
  },

  onChange: function(evt, ingredients) {
    this.setState({ingredients: ingredients})
  },

  onInputChange: function(e) {
    this.setState({newText: e.target.value})
  },

  onClick: function(e) {
    e.preventDefault()
    if (this.state.newText) {
      Actions.postIngredients(this.state.newText)
    }
    this.setState({newText: ""})
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
            <form>
              <div className="form-group">
                <input className="form-control"
                       placeholder="Add Ingredient"
                       value={this.state.newText}
                       onChange={this.onInputChange}/>
              </div>
              <button type="submit" className="btn btn-primary" onClick={this.onClick}>
                Add Item to List
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = List;
