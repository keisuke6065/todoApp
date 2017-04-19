import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Todo from './component/Todo';
import {
  loadTodos,
  addTodo,
  toggleToDo,
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
    this.props.dispatchAddTodo(text);
  };

  render() {
    return (
      <div>
        <Todo
          todo={this.props.todo}
          handleAddTodo={this.handleAddTodo.bind(this)}
        />
        <Link to='/'>home</Link>
      </div>
    )};
  }

function mapStateToProps(state) {
  console.log(state.todo.data);
  return {
    todo: state.todo
  };
}
const mapDispatchToProps = (dispatch) => {
  const dispatchFetchTodo = () => dispatch(loadTodos());
  const dispatchAddTodo = text => {
    console.log('dispatchAddTodo', text);
    return dispatch(addTodo(text));
  };
  const dispatchToggleTodo = todo => dispatch(toggleToDo(todo.id));
  return {
    dispatchFetchTodo,
    dispatchAddTodo,
    dispatchToggleTodo,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoContainer);