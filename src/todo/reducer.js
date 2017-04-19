export default function todoReducer (state = {
  data: []
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
      return {data: [...todos]};
    case 'FINISH_ADD_TODO':
    case 'TOGGLE_TODO':
    case 'DELETE_TODO':
      return state;
    default:
      return state;
  }
}