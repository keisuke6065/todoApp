import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import todoReducer from './todo/reducer'
import authReducer from './auth/reducer'

const rootReducer = combineReducers({
  auth: authReducer,
  todo: todoReducer,
  routing: routerReducer,
});

export default rootReducer;
