// ToDo を一意に特定できる ID
let nextTodoId = 0;

// ToDo の追加
export function addToDo (text) {
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