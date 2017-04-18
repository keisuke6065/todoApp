import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router'
import Todo from './component/Todo'
import {
  addTodo,
  toggleToDo,
} from './action';

export class TodoContainer extends Component {

  handleAddTodo = text => {
    this.props.dispatchAddTodo(text);
  };

  render() {
    return (
      <div>
        <Todo
          todo={this.props.todo}
          handleAddTodo={this.handleAddTodo}
        />
        <Link to='/'>home</Link>
      </div>
    )};
  }

function mapStateToProps(state) {
  return {
    todo: state.todo.data
  };
}
const mapDispatchToProps = (dispatch) => {
  const dispatchAddTodo = text => {
    console.log('dispatchAddTodo', text);
    return dispatch(addTodo(text));
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