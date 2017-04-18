import { firebaseDb } from '../core/firebase/'
const ref = firebaseDb.ref('todos');

let nextTodoId = 0;

// ToDo の追加
export function addTodo (text) {
  return dispatch => {
    ref.push({
      text: text,
      completed: false,
    }).cache(error => dispatch({
    }));
  }
}
// ToDo の完了／未完了
export function toggleToDo (id) {
  return {
    type: 'TOGGLE_TODO',
    id: id,
  };
}