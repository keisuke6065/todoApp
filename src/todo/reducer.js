export default function todoReducer (state = {
  data: [],
}, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        data: state.data.concat({
          id: action.id,
          text: action.text,
          completed: false
        })
      };
    case 'TOGGLE_TODO':
      return {
        data: state.data.map(todo => {
          if (todo.id !== action.id) {
            return todo;
          }
          return Object.assign({}, todo, {completed: !todo.completed});
        })
      };
    default:
      return state;
  }
}