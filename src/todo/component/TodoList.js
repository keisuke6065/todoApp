import React, {Component} from 'react';

class TodoList extends Component {

  handleToggleTodo(key) {
    this.props.handleToggleTodo(key);
  };

  handleDeleteTodo(key) {
    this.props.handleDeleteTodo(key);
  };

  renderTodo(todos) {
    if (todos.length > 0) {
      return todos.map(todo => (
          <div key={todo.key}>
            <li onClick={e => this.handleToggleTodo(todo.key)}>{todo.text} {todo.completed.toString()}</li>
            <p onClick={e => this.handleDeleteTodo(todo.key)}>削除</p>
          </div>
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