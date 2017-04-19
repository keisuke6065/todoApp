export default function todoReducer (state = {
  data: [],
}, action) {
  switch (action.type) {
    case 'FETCH_TODO':
      let todos = [];
      if (action.payload){
        Object.keys(action.payload).forEach(key =>{
          let todo = action.payload[key];
          todos.push({
            key: key,
            text: todo.text,
            completed: todo.completed,
          })
        });
      }
      console.log([...todos]);
      return [...todos];
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
          if (todo.key !== action.key) {
            return todo;
          }
          return Object.assign({}, todo, {completed: !todo.completed});
        })
      };
    default:
      return state;
  }
}