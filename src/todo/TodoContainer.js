import React, { Component } from 'react';
import { connect } from 'react-redux';
import Todo from './component/todo'
import {
  addToDo,
  toggleToDo,
} from './action'

export class TodoContainer extends Component {
  state = {
    text: 'text',
  };

  handleAddTodo = text => {
    console.log(this.state.text);
    this.props.dispatchAddTodo(text);
  };

  render() {
    return (
      <div>
        <Todo
          todo={this.props.todo}
          handleAddTodo={this.handleAddTodo}
        />
      </div>
    )};
  }

function mapStateToProps(state) {
  console.log(state);
  return {
    todo: state.todo
  };
}
const mapDispatchToProps = (dispatch) => {
  const dispatchAddTodo = text => {
    console.log('dispatchAddTodo', text);
    return dispatch(addToDo(text));
  };
  const dispatchToggleTodo = todo => dispatch(toggleToDo(todo.id));
  return {
    dispatchAddTodo,
    dispatchToggleTodo,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoContainer);