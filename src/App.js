import React, {Component} from 'react';
import {Link} from 'react-router';

class App extends Component {
  render() {
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
