import {firebaseDb} from '../core/firebase';
import {createActions} from 'redux-actions';

export const Action = {
  FINISH_LOGIN: 'FINISH_LOGIN',
  FETCH_TODO: 'FETCH_TODO',
  FINISH_ADD_TODO: 'FINISH_ADD_TODO',
  TOGGLE_TODO: 'TOGGLE_TODO',
  DELETE_TODO: 'DELETE_TODO',
};

const keyValueIdentity = (key, value) => ({[key]: value});
const {
  finishAddTodo,
  fetchTodo,
  toggleTodo,
  deleteTodo,
} = createActions({
    [Action.FINISH_ADD_TODO]: keyValueIdentity,
  },
  Action.FETCH_TODO,
  Action.TOGGLE_TODO,
  Action.DELETE_TODO,
);

export function loadTodos() {
  return (dispatch, getState) => {
    const state = getState();
    if (state && state.auth && state.auth.user && state.auth.user.uid) {
      const id = state.auth.user.uid;
      return firebaseDb.ref(`todos/${id}`).once('value', (snapshot) => {
        dispatch(fetchTodo(snapshot.val()));
      });
    }
  };
}


// ToDo の追加
export function addTodo(text) {
  return (dispatch, getState) => {
    const state = getState();
    const id = state.auth.user.uid;
    const todo = {
      text,
      completed: false,
    };
    return firebaseDb.ref(`todos/${id}`).push(todo).then(resp => {
      const assign = Object.assign({}, todo, {key: resp.key});
      dispatch(finishAddTodo('data', assign));
    }).catch(err => dispatch(finishAddTodo(new Error(err.message))));
  }
};

// ToDo の完了／未完了
export function changeToggleToDo(key) {
  return (dispatch, getState) => {
    const state = getState();
    const id = state.auth.user.uid;
    const todo = state.todo.data.filter(todo => todo.key === key);
    return firebaseDb.ref(`todos/${id}/${key}`)
      .update({completed: !todo[0].completed})
      .then(dispatch(toggleTodo(key)))
      .catch(err => dispatch(toggleTodo(new Error(err.message))));
  }
};

export function deleteTodoFirebase(key) {
  return (dispatch, getStatus) => {
    const state = getStatus();
    const id = state.auth.user.uid;
    return firebaseDb.ref(`todos/${id}/${key}`).remove()
      .then(dispatch(deleteTodo(key)))
      .catch(err => dispatch(deleteTodo(new Error(err.message))));
  }
};
