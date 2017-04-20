import {Action} from './action';
import _ from 'lodash';

export default function todoReducer(state = {
  data: []
}, action) {
  switch (action.type) {
    case Action.FETCH_TODO:
      let todos = [];
      if (action.payload) {
        Object.keys(action.payload).forEach(key => {
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
    case Action.FINISH_ADD_TODO:
      const {payload} = action;
      const concat = state.data.concat(payload.data);
      return {data: [...concat]};
    case Action.TOGGLE_TODO:
      return {
        data: state.data.map(todo => {
          if (todo.key !== action.payload) {
            return todo;
          }
          return Object.assign({}, todo, {completed: !todo.completed});
        })
      };
    case Action.DELETE_TODO:
      const reject = _.reject(state.data, {key: action.payload});
      return {data: [...reject]};
    default:
      return state;
  }
}