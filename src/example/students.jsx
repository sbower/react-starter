/** @jsx React.DOM */
var React = require('react')
var Router = require('react-router')
var Link = Router.Link;
var studentStore = require('./studentStore.js')

var StudentsList = React.createClass({
    render: function() {
        var someArray = this.props.students.map(function(student) {return <li key={student.id}>Name: <Link to="detail" params={{id: student.id}}>{student}</Link></li>})
        return ( <ul>
                {someArray}
                
            </ul>)
    }
})

var Students = React.createClass({
  render: function() {
    
    console.log("HELLO")
    return (
        <div><h1>Hello STUDENTS</h1>
            <StudentsList students={this.state.students}/>
        <Link to="new">Add New</Link>
        <div><this.props.activeRouteHandler addStudent={this.addStudent} /> </div></div>
        )

  },
  addStudent: function (student) {
      
      var newStudents = this.state.students;
      newStudents.push(student.firstname + ", " + student.lastname);
      
      this.setState({students: newStudents});
  },
  
  getInitialState: function () {

      return {students: studentStore.getAll()};
  },
  addStuff: function() { this.setState({students: studentStore.getAll()}) },
  componentDidMount: function () {
      studentStore.register(this.addStuff)
  },
  
})

module.exports = Students


