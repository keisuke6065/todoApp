import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

// 認証済みユーザへの表示用コンテナ
class UserOnly extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
  };

  static transfer(props) {
    if (!props.auth.isLoggedIn) {
      browserHistory.push('/login');
    }
  }

  componentWillMount() {
    UserOnly.transfer(this.props);
  }

  componentWillUpdate() {
    UserOnly.transfer(this.props);
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { auth } = state;
  return { auth };
};
const mapDispatchToProps = () => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(UserOnly);
