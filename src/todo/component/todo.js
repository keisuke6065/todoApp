import React, { Component } from 'react';

class Todo extends Component {

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleAddTodo(this.refs.name.value);
    this.refs.name.value = '';
  };

  static renderTodo(todo) {
    return todo.map(todo => (
        <li key={todo.id}>{todo.text}</li>
      )
    );
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
        <ul>
          {Todo.renderTodo(this.props.todo)}
        </ul>
      </div>
    );
  }
}

export default Todo;