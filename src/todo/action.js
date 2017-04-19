import { firebaseDb } from '../core/firebase';
import { createActions } from 'redux-actions';

const ref = firebaseDb.ref('todos');

export const Action = {
  FINISH_LOGIN: 'FINISH_LOGIN',
  FETCH_TODO: 'FETCH_TODO',
  FINISH_ADD_TODO: 'FINISH_ADD_TODO',
  TOGGLE_TODO: 'TOGGLE_TODO',
};

const {
  finishLogin,
  fetchTodo,
  finishAddTodo,
} = createActions({
    [Action.FINISH_LOGIN]: (key, value) => ({ [key]: value }),
  },
  Action.FETCH_TODO,
  Action.FINISH_ADD_TODO,
);

export function loadTodos() {
  return (dispatch, getState) => {
    const state = getState();
    console.log(state);
    ref.off();
    ref.on('value',(snapshot) => {dispatch(fetchTodo(snapshot.val()))});
  };
}


// ToDo の追加
export const addTodo = text => {
  return (dispatch, getStatus) => {
    const todo = {
      text,
      completed: false,
    };
    const key = ref.push(todo).key;
    // .catch(error => dispatch(new Error(error)));
    return dispatch(finishAddTodo('data', key));
  }
};

// ToDo の完了／未完了
export const toggleToDo = key => {
  return {
    type: 'TOGGLE_TODO',
    key: key,
  };
};
