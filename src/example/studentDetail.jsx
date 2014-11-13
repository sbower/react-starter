/** @jsx React.DOM */
var React = require('react')

var StudentDetail = React.createClass({
  render: function() {
    return <h1>{this.props.params.id}</h1>
  },
})

module.exports = StudentDetail
