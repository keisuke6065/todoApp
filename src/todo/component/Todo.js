import React, { Component, PropTypes } from 'react';
import TodoList from './TodoList';

const s = {
  layout: {
    backgroundColor: '#fff',
    boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);',
    margin: '0 0 40px 0',
  },
  title: {
    fontSize: '100px',
    fontWeight: '100',
    textAlign: 'center',
    color: 'rgba( 175, 47, 47, 0.15)',
    textRendering:  'optimizeLegibility',
  },
  input: {
    padding: '16px 16px 16px 60px',
    background: 'rgba(0, 0, 0, 0.003)',
    boxShadow: 'inset 0 -2px 1px rgba(0,0,0,0.03)',
    margin: '0',
    width: '100%',
    fontSize: '24px',
    fontFamily: 'inherit',
    fontWeight: 'inherit',
    lineHeight: '1.4em',
    border: '0',
    outline: 'none',
    boxSizing: 'border-box',
  }
};

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
        <h1 style={s.title}>todos</h1>
        <section style={s.layout} className="paper">
          <section>
            <form className="commentForm" onSubmit={this.handleSubmit}>
              <input style={s.input} type="text" placeholder="な〰にやりますか〰" ref="name" />
            </form>
            <TodoList
              todo={this.props.todo}
              handleToggleTodo={this.props.handleToggleTodo}
              handleDeleteTodo={this.props.handleDeleteTodo}
            />
          </section>
          <footer className="paper-foot" style={{ height: '0' }} />
        </section>
        <footer style={{ margin: '65px auto 0' }} />
      </div>
    );
  }
}

export default Todo;