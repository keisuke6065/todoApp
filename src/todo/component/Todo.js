import React, { Component, PropTypes } from 'react';
import TodoList from './TodoList';

class Todo extends Component {

  static propTypes = {
    handleAddTodo: PropTypes.func.isRequired,
    todo: PropTypes.arrayOf(),
  };

  handleSubmit = (e) => {
    e.preventDefault();
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
        <p>登録</p>
        <form className="commentForm" onSubmit={this.handleSubmit}>
          <input type="text" placeholder="name" ref="name" />
          <input type="submit" value="Todo に追加する" />
        </form>
        <TodoList todo={this.props.todo}/>
      </div>
    );
  }
}

export default Todo;