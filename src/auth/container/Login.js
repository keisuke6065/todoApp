import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import LoginForm from '../component/LoginForm';
import {requestLogin} from '../action';

const defaultStyle = {
  height: '100vh',
  backgroundSize: 'cover',
};

const containerStyle = {
  width: '300px',
  height: '200px',
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  margin: 'auto',
};

class Login extends Component {
  static propTypes = {
    isFetching: PropTypes.bool,
    handleLoginSubmit: PropTypes.func.isRequired,
    handleRegisterSubmit: PropTypes.func.isRequired,
  };

  render() {
    return (
      <div style={defaultStyle}>
        <div style={containerStyle}>
          <LoginForm
            isFetching={this.props.isFetching}
            handleLoginSubmit={this.props.handleLoginSubmit}
            handleRegisterSubmit={this.props.handleRegisterSubmit}
          />
        </div>
      </div>);
  }
}

const mapStateToProps = (state) => {
  const {isFetching, error} = state.auth;
  return {isFetching, error};
};

const mapDispatchToProps = (dispatch) => {
  const handleLoginSubmit = (email, password) => dispatch(requestLogin(email, password));
  return {
    handleLoginSubmit,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
