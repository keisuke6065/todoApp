import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Todo from './component/Todo';
import {
  loadTodos,
  addTodo,
  changeToggleToDo,
  deleteTodoFirebase,
} from './action';

export class TodoContainer extends Component {

  static propTypes = {
    dispatchAddTodo: PropTypes.func.isRequired,
  };

  componentWillMount() {
    console.log('willMount');
    this.props.dispatchFetchTodo();
  }

  handleAddTodo(text) {
    console.log(text);
    this.props.dispatchAddTodo(text);
  };

  handleToggleTodo(key) {
    console.log('handleToggleTodo: start', key);
    this.props.dispatchToggleTodo(key);
  }

  handleDeleteTodo(key) {
    console.log('handleDeleteTodo: start', key);
    this.props.dispatchDeleteTodo(key);
  }

  render() {
    return (
      <div>
        <Todo
          todo={this.props.todo}
          handleAddTodo={this.handleAddTodo.bind(this)}
          handleToggleTodo={this.handleToggleTodo.bind(this)}
          handleDeleteTodo={this.handleDeleteTodo.bind(this)}
        />
        <Link to='/'>home</Link>
      </div>
    )};
  }

function mapStateToProps(state) {
  console.log('mapStateToProps');
  console.log(state.todo);
  return {
    todo: state.todo.data
  };
}
const mapDispatchToProps = (dispatch) => {
  const dispatchFetchTodo = () => dispatch(loadTodos());
  const dispatchAddTodo = text => {
    console.log('dispatchAddTodo', text);
    return dispatch(addTodo(text));
  };
  const dispatchToggleTodo = key => {
    console.log('dispatchToggleTodo', key);
    return dispatch(changeToggleToDo(key));
  };
  const dispatchDeleteTodo = key => {
    console.log('dispatchDeleteTodo', key);
    return dispatch(deleteTodoFirebase(key));
  };
  return {
    dispatchFetchTodo,
    dispatchAddTodo,
    dispatchToggleTodo,
    dispatchDeleteTodo,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoContainer);