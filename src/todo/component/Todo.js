import React, { Component, PropTypes } from 'react';
import TodoList from './TodoList';

class Todo extends Component {

  static propTypes = {
    handleAddTodo: PropTypes.func.isRequired,
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleAddTodo(this.refs.name.value);
    this.refs.name.value = '';
  };

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
        <h1>TODO</h1>
        <p>登録</p>
        <form className="commentForm" onSubmit={this.handleSubmit}>
          <input type="text" placeholder="name" ref="name" />
          <input type="submit" value="Todo に追加する" />
        </form>
        <TodoList todoList={this.props.todo} />
      </div>
    );
  }
}

export default Todo;