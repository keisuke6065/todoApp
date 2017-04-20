import {createActions} from 'redux-actions';
import {browserHistory} from 'react-router';
import {firebaseAuth} from '../core/firebase';

export const Action = {
  START_LOGIN: 'START_LOGIN',
  FINISH_LOGIN: 'FINISH_LOGIN',
  START_REGISTER: 'START_REGISTER',
  FINISH_REGISTER: 'FINISH_REGISTER',
  DO_LOGOUT: 'DO_LOGOUT',
};

const {
  startLogin,
  finishLogin,
  doLogout,
  startRegister,
  finishRegister,
} = createActions({
    [Action.FINISH_LOGIN]: (key, value) => ({[key]: value}),
    [Action.START_REGISTER]: (key, value) => ({[key]: value}),
    [Action.DO_LOGOUT]: (key, value) => ({[key]: value}),
  },
  Action.START_LOGIN,
  Action.FINISH_REGISTER,
);

export const forceLogout = (message) => (dispatch) => {
  browserHistory.push('/login');
  firebaseAuth.signOut();
  dispatch(doLogout({message}));
};

export const requestLogin = (email, password) => (dispatch, getStatus) => {
  if (getStatus().isFetching) {
    return Promise.resolve();
  }

  dispatch(startLogin());
  firebaseAuth.signInWithEmailAndPassword(email, password)
    .then(resp => {
      console.log(resp);
      dispatch(finishLogin('data', resp));
    })
    .catch(err => dispatch(finishLogin(new Error(err.message))));
};

export const requestRegister = (email, password) => (dispatch, getStatus) => {
  if (getStatus().isFetching) {
    return Promise.resolve();
  }

  dispatch(startRegister());
  firebaseAuth.createUserWithEmailAndPassword(email, password)
    .then(resp => {
      console.log(resp);
      dispatch(finishRegister('data', resp));
    })
    .catch(err => dispatch(finishRegister(new Error(err.message))));
};

