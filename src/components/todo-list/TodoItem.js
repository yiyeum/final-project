import React, { Component } from 'react';

class TodoItem extends Component{
  render(){
    return(
         <li className="todo-list">
             <input type="checkbox" onChange={() => this.props.deleteFromTodoList(this.props.todo.key)}/>
             {this.props.todo.data}
         </li>
    );
  }
}

export default TodoItem;
