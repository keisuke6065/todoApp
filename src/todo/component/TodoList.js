import React, {Component} from 'react';

const s = {
  item: {
    fontSize: '24px',
    whiteSpace: 'pre-line',
    wordBreak: 'break-all',
    padding: '15px 60px 15px 15px',
    marginLeft: '45px',
    marginRight: '30px',
    display: 'block',
    lineHeight: '1.2',
    transition: 'color 0.4s',
  },
  toggle: {
    WebkitAppearance: 'none',
    appearance: 'none',
    outline: 'none',
    position: 'absolute',
    margin: 'auto 0',
    height: '40px',
    width: '40px',
    top: 0,
    bottom: 0,
  },
  delete: {
    cursor: 'pointer',
    color: '#ddd',
    borderRadius: '50%',
    border: '1px solid #ddd',
    position: 'absolute',
    verticalAlign: 'middle',
    lineHeight: '30px',
    fontSize: '20px',
    textAlign: 'center',
    right: '30px',
    top: '0px',
    height: '30px',
    width: '30px',
    bottom: '0px',
    margin: "auto 0",
  }
};

class TodoList extends Component {

  handleToggleTodo(key) {
    this.props.handleToggleTodo(key);
  };

  handleDeleteTodo(key) {
    this.props.handleDeleteTodo(key);
  };

  constructor(prop) {
    super(prop)
  }

  renderTodo(todos) {

    if (todos.length > 0) {
      return todos.map((todo, index) => (
          <li style={{ borderBottom: '1px solid #ededed' }} key={todo.key}>
            <div style={{ position: 'relative' }}>
              <input
                type="checkbox"
                checked={todo.completed}
                style={s.toggle}
                onChange={() => this.handleToggleTodo(todo.key)}
              />
              <label
                style={s.item}
              >
                {todo.text}
              </label>
              <span
                style={s.delete}
                onClick={e => this.handleDeleteTodo(todo.key)}
              >
                ☓
              </span>
            </div>
          </li>
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