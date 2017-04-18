// import { createActions } from 'redux-actions';

// export const Action = {
//   ADD_TODO: 'ADD_TODO',
//   TOGGLE_TODO: 'TOGGLE_TODO',
// };

// const {
//   addTodo,
  //toggleTodo,
// } = createActions({
  // [Action.ADD_TODO]: (key, value) => ({ [key]: value }),
  //[Action.TOGGLE_TODO]: (key, value) => ({ [key]: value }),
// });

let nextTodoId = 0;

// export function updateAddTodo(text) {
//   console.log('action:', text);
//   return (dispatch, getStatus) => {
//     return dispatch(addTodo({
//       id: nextTodoId++,
//       text: text,
//     }));
//   }
// }

// ToDo の追加
export function addTodo (text) {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text: text,
  };
}
// ToDo の完了／未完了
export function toggleToDo (id) {
  return {
    type: 'TOGGLE_TODO',
    id: id,
  };
}