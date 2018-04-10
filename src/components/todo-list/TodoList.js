import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component{
  render(){
    return(
     <div className="todo-wrapper row justify-content-center">
       <ul>
         {this.props.todos.map(todo=>(
          <TodoItem key={todo.key} todo={todo} deleteFromTodoList={this.props.deleteFromTodoList}/>
         ))}
       </ul>
     </div>
    );
  }
}

export default TodoList;
