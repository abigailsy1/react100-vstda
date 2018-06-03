import React, { Component } from 'react';
import Todo from './components/Todo';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      priority: "",
      todos: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.editTodo = this.editTodo.bind(this);
    this.submit = this.submit.bind(this);
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  deleteTodo(i) {
    let arr = this.state.todos.slice();
    arr.splice(i, 1)
    this.setState({ todos: arr })
  }
  editTodo(newText, i) {
    let arr = this.state.todos.slice();
    arr[i] = newText
    this.setState({ todos: arr })
  }
  submit() {
    let click = this.state.todos.slice();
    click.push({ text: this.state.text, priority: this.state.priority });
    this.setState({ todos: click })
  }

  render() {
    return (
      <div className="container">
        <h1 className="text-black">Very Simple Todo App</h1>
        <p className="text-black">Track all of the things.</p>
        <hr className="bg-red" />

        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="card-header">Add New Todo</div>

              <div className="card-body">
                <p className="text font-weight-bold"> I want to ...</p>
                <textarea className="create-todo-text form-control" name="text" rows="4" placeholder="Enter to do items" value={this.state.text} onChange={this.handleChange}></textarea>
                <br />
                <p className="text font-weight-bold">How much of a priority is this?</p>
                <select className="create-todo-priority form-control" name="priority" value={this.state.priority} onChange={this.handleChange}>
                  <option value="0">Select a priority</option>
                  <option value="1">Low Priorirty</option>
                  <option value="2">Medium Priority</option>
                  <option value="3">High Priority</option>
                </select>
              </div>

              <div className="card footer text-center">
                <button type="button" name="create-todo" className="create-todo btn btn-success btn-small" onClick={this.submit}>ADD</button>
              </div>
            </div>
          </div>

          <div className="col-md-8">
            <div className="card">
              <div className="card-header font-weight-bold">View Todos:</div>
              <ul className="list-group">
                {this.state.todos.length ? (
                  this.state.todos.map((details, i) =>
                    <Todo key={details.text + i} details={details} editUpdateTodo={this.editTodo} deleteUpdateTodo={this.deleteTodo} index={i} />)
                ) : (
                    <li className="list-group-item list-group-item-danger">
                      <h3><strong>Welcome to Very Simple Todo App</strong></h3>
                      <br />
                      <span className="font-weight-normal">Get started now by adding a new todo on the left!</span>
                    </li>
                  )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default App;


