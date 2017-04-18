import { firebaseDb } from '../core/firebase';
import { createActions } from 'redux-actions';

const ref = firebaseDb.ref('todos');

export const Action = {
  FINISH_LOGIN: 'FINISH_LOGIN',
  FINISH_ADD_TODO: 'FINISH_ADD_TODO',
};

const {
  finishLogin,
  finishAddTodo,
} = createActions({
    [Action.FINISH_LOGIN]: (key, value) => ({ [key]: value }),
  },
  Action.FINISH_ADD_TODO,
);


let nextTodoId = 0;

// ToDo の追加
export const addTodo = text => {
  const todo = {
    text,
    completed: false,
  };
  const key = ref.push(todo).key;
  // .catch(error => dispatch(new Error(error)));
  return finishAddTodo('data', key);
};

// ToDo の完了／未完了
export const toggleToDo = id => {
  return {
    type: 'TOGGLE_TODO',
    id: id,
  };
};
