import React, { Component, PropTypes } from 'react';

const defaultPStyle = {
  color: '#fff',
  textAlign: 'center',
};

const buttonRow = {
  display: 'flex',
};

const defaultInputStyle = {
  width: '100%',
  border: 0,
  padding: '10px',
  margin: '0 -10px 20px',
  borderRadius: '3px',
};

const defaultButtonStyle = {
  width: '200px',
  margin: '0 20px',
  padding: '10px 20px',
  borderRadius: '3px',
  cursor: 'pointer',
};

class LoginButton extends Component {
  render() {
    return (
      <button
        style={defaultButtonStyle}
        onClick={this.props.onClick}
      >
        ログイン
      </button>
    );
  }
}


class RegisterButton extends Component {
  render() {
    return (
      <button
        style={defaultButtonStyle}
        onClick={this.props.onClick}
      >
        新規作成
      </button>
    );
  }
}

function DisabledButton() {
  return <div>認証中</div>;
}

class LoginForm extends Component {
  static propTypes = {
    isFetching: PropTypes.bool,
    handleLoginSubmit: PropTypes.func.isRequired,
    handleRegisterSubmit: PropTypes.func.isRequired,
  };

  handleSubmit(e) {
    const target = e.target;
    e.preventDefault();
    const action = this.isLoginAction
      ? this.props.handleLoginSubmit
      : this.props.handleRegisterSubmit;

    action(
      target.name.value.trim(),
      target.password.value.trim(),
    );
  }

  isLoginAction = false;

  renderError() {
    if (this.props.error) {
      return (<pre>
        <i className="material-icons">report_problem</i>
        {this.props.error.message}
      </pre>);
    }
  }

  renderButtonRow() {
    if (this.props.isFetching) {
      return (<DisabledButton />);
    }
    return (
      <div style={buttonRow}>
        {this.renderLoginButton()}
        {this.renderRegisterButton()}
      </div>);
  }

  renderLoginButton() {
    return (
      <LoginButton
        onClick={() => this.isLoginAction = true}
      />);
  }

  renderRegisterButton() {
    return (
      <RegisterButton
        onClick={() => this.isLoginAction = false}
      />);
  }

  render() {
    return (
      <div>
        <p style={defaultPStyle}>Login</p>
        <form onSubmit={e => this.handleSubmit(e)}>
          <input type="text" id="name" placeholder="Email" style={defaultInputStyle} />
          <br />
          <input type="password" id="password" placeholder="Password" style={defaultInputStyle} />
          {this.renderError()}
          <br />
          {this.renderButtonRow()}
        </form>
      </div>);
  }
}

export default LoginForm;
