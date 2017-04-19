import React, { Component } from 'react';

class TodoList extends Component {

  renderTodo(todos) {
    if (todos.length > 0) {
      return todos.map(todo => (
          <li key={todo.key}>{todo.text}</li>
        )
      );
    }
  }

  render() {
    return (
      <div>
        <ul>
          {this.renderTodo(this.props.todo)}
        </ul>
      </div>
    );
  }
}

export default TodoList;