import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, IndexRedirect, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import DevTools from './DevTools'
import TodoRoot from './TodoRoot'
import rootReducer from './rootReducer'
import UserOnly from './auth/container/UserOnly'
import Anonymous from './auth/container/Anonymous';

// const store = createStore(
//   combineReducers({
//     reducer,
//     routing: routerReducer
//   }),
//   DevTools.instrument(),
// );
const enhancer = compose(
  applyMiddleware(thunk),
  DevTools.instrument(),
);

const store = createStore(
  rootReducer,
  enhancer,
);

const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={store}>
    <div>
      <Router history={history}>
        <Route path="" component={UserOnly}>
          <div>ログイン中ううううううう</div>
          <Route path="todo" component={TodoRoot} />
        </Route>
        <Route path="/login" component={Anonymous} />
      </Router>
      <DevTools />
    </div>
  </Provider>,
  document.getElementById('root')
);
