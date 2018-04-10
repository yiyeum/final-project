import React, { Component } from 'react';
import TodoList from './TodoList';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      label:''
    };

    this.listInputChange = this.listInputChange.bind(this);
    this.addTodoList = this.addTodoList.bind(this);
    this.deleteFromTodoList = this.deleteFromTodoList.bind(this);
    this.enterPress = this.enterPress.bind(this);
  }

  // function for adding by enter key
  enterPress(e){
    if (e.key === 'Enter') {
      this.addTodoList(e);
    }
  }

  // function for handle change of input
  listInputChange(e) {
    this.setState({
      label: e.target.value
    });
  }

  // function to add a new todo to the list array
  addTodoList(e) {
    e.preventDefault();
  
    if(this.state.label.trim() !== ''){

      var newTodo = {
        key: Date.now(),
        data: this.state.label
      };

      this.setState((prevState) => {
        return {
          todos: prevState.todos.concat(newTodo),
          label: ''
        }
      });

    }

  }

  // function to delete from the array

  deleteFromTodoList(keyTobeDeleted) {
    var filteredTodos = this.state.todos.filter(todo => {
      return todo.key !== keyTobeDeleted;
    });

    this.setState({
      todos: [].concat(filteredTodos)
    });
  }

  render() {
    return (
      <div className="mt-5">
        <div className="row justify-content-center">
          <div className="col-4">
            <input type="text" name="whatTodo" className="form-control add-input" onKeyPress={this.enterPress} onChange={this.listInputChange} value={this.state.label} />
          </div>
          <div className="col-3">
            <button className="btn add-btn" onClick={this.addTodoList}>ADD</button>
          </div>
        </div>
        <TodoList todos={this.state.todos} deleteFromTodoList={this.deleteFromTodoList} />
      </div>
    );
  }
}

export default Todo;
