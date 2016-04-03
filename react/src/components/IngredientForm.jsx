var React = require('react')
var Actions = require('../reflux/actions.jsx')

var IngredientForm = React.createClass({
  getInitialState: function() {
    return {newText: ""}
  },
  onClick: function(e) {
    e.preventDefault()
    if (this.state.newText) {
      Actions.postIngredients(this.state.newText)
    }
    this.setState({newText: ""})
  },
  onInputChange: function(e) {
    this.setState({newText: e.target.value})
  },
  render: function() {
    return (
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
    )
  }
})

module.exports = IngredientForm
