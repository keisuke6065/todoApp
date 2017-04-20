import {firebaseDb} from '../core/firebase';
import {createActions} from 'redux-actions';

const ref = firebaseDb.ref('todos');

export const Action = {
  FINISH_LOGIN: 'FINISH_LOGIN',
  FETCH_TODO: 'FETCH_TODO',
  FINISH_ADD_TODO: 'FINISH_ADD_TODO',
  TOGGLE_TODO: 'TOGGLE_TODO',
  DELETE_TODO: 'DELETE_TODO',
};

const keyValueIdentity = (key, value) => ({[key]: value});
const {
  finishLogin,
  finishAddTodo,
  fetchTodo,
  toggleTodo,
  deleteTodo,
} = createActions({
    [Action.FINISH_LOGIN]: keyValueIdentity,
    [Action.FINISH_ADD_TODO]: keyValueIdentity,
  },
  Action.FETCH_TODO,
  Action.TOGGLE_TODO,
  Action.DELETE_TODO,
);

export function loadTodos() {
  return (dispatch, getState) => {
    const state = getState();
    console.log(state);
    ref.off();
    ref.once('value', (snapshot) => {
      dispatch(fetchTodo(snapshot.val()))
    });
  };
}


// ToDo の追加
export function addTodo(text) {
  return (dispatch) => {
    const todo = {
      text,
      completed: false,
    };
    const key = ref.push(todo).key;
    console.log(key);
    // .catch(error => dispatch(new Error(error)));
    const assign = Object.assign({}, todo, {key: key});
    return dispatch(finishAddTodo('data', assign));
  }
};

// ToDo の完了／未完了
export function changeToggleToDo(key) {
  return (dispatch, getStatus) => {
    const state = getStatus();
    const todo = state.todo.data.filter(todo => todo.key === key);
    firebaseDb.ref(`todos/${key}`).update({completed: !todo[0].completed});
    return dispatch(toggleTodo(key));
    //return dispatch(toggleTodo('data', key));
  }
};

export function deleteTodoFirebase(key) {
  return (dispatch, getStatus) => {
    const state = getStatus();
    const todo = state.todo.data.filter(todo => todo.key === key);
    firebaseDb.ref(`todos/${key}`).remove();
    return dispatch(deleteTodo(key));
  }
};
