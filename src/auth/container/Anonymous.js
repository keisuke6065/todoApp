import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import Login from './Login';
import { requestLogin, requestRegister } from '../action';

class Anonymous extends Component {
  static propTypes = {
    auth: PropTypes.object, // eslint-disable-line react/forbid-prop-types
    dispatchLogin: PropTypes.func.isRequired,
    dispatchRegister: PropTypes.func.isRequired,
  };

  static transfer(auth) {
    if (auth && auth.isLoggedIn) {
      browserHistory.push('/todo');
    }
  }

  componentWillMount() {
    Anonymous.transfer(this.props.auth);
  }

  componentWillUpdate(nextProps) {
    Anonymous.transfer(nextProps.auth);
  }

  render() {
    return (
      <div>
        <Login
          handleLoginSubmit={this.props.dispatchLogin}
          handleRegisterSubmit={this.props.dispatchRegister}
        />
      </div>);
  }
}

const mapStateToProps = (state) => {
  const { auth } = state;
  return { auth };
};

const mapDispatchToProps = (dispatch) => {
  const dispatchLogin = (email, password) => dispatch(requestLogin(email, password));
  const dispatchRegister = (email, password) => dispatch(requestRegister(email, password));

  return {
    dispatchLogin,
    dispatchRegister,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Anonymous);
