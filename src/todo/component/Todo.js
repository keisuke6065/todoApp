import React, { Component, PropTypes } from 'react';
import TodoList from './TodoList';

class Todo extends Component {

  static propTypes = {
    handleAddTodo: PropTypes.func.isRequired,
    handleToggleTodo: PropTypes.func.isRequired,
    handleDeleteTodo: PropTypes.func.isRequired,
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    this.props.handleAddTodo(this.refs.name.value);
    this.refs.name.value = '';
  };

  renderTodo(todos) {
    console.log(todos);
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
        <h1>TODO</h1>
        <form className="commentForm" onSubmit={this.handleSubmit}>
          <input type="text" placeholder="name" ref="name" />
          <input type="submit" value="Todo に追加する" />
        </form>
        <TodoList
          todo={this.props.todo}
          handleToggleTodo={this.props.handleToggleTodo}
          handleDeleteTodo={this.props.handleDeleteTodo}
        />
      </div>
    );
  }
}

export default Todo;