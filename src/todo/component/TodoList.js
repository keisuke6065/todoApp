import React, { Component } from 'react';

class TodoList extends Component {

  renderTodo(todo) {
    if (todo.length > 0) {
      return todo.map(todo => (
          <li key={todo.id}>{todo.text}</li>
        )
      );
    }
  }

  render() {
    return (
      <div>
        <ul>
          {this.renderTodo(this.props.todoList)}
        </ul>
      </div>
    );
  }
}

export default TodoList;