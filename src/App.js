import React, { Component } from 'react';
import { Link } from 'react-router';
import firebase from 'firebase';

const authregister = () => {
  const auth = firebase.auth();
  window.hoge = { auth };

}

class App extends Component {

  // handleAuth() {
  //   firebase.auth();
  // }

  render() {
    authregister()
    return (
        <div>
          <h1>こんにちは</h1>
          <p>todoは下のリンクから</p>
          <Link to='/todo'>todo</Link>
        </div>
    );
  }
}

export default App;
