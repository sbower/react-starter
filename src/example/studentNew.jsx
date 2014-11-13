/** @jsx React.DOM */
var React = require('react')
var studentStore = require('./studentStore.js')

var StudentNew = React.createClass({
  render: function() {
    return <div> First: <input onChange={this.handleFirst} name='first'/> Last: <input onChange={this.handleLast} name='last'/> <button onClick={this.handleSubmit}>submit this shit </button></div> 
  },
  handleSubmit: function (event) {
      var student = {firstname: this.state.firstname, lastname: this.state.lastname}
      studentStore.insert(student)
  },
  handleFirst: function (event) {
      this.setState({firstname: event.target.value})
  },
  handleLast: function (event) {
      this.setState({lastname: event.target.value})    
  },
})

module.exports = StudentNew
