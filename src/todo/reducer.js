export default function reducer (state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        todo: state.todo.concat({
          id: action.id,
          text: action.text,
          completed: false
        })
      };
    case 'TOGGLE_TODO':
      return {
        todo: state.todo.map(t => {
          if (t.id !== action.id) {
            return t;
          }

          return Object.assign({}, t, {completed: !t.completed});
        })
      };
    default:
      return state;
  }
}