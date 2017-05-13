import React, { Component } from 'react';
import { connect } from 'react-redux';
import './index.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p className="App-intro">
          Hello { this.props.user }
        </p>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(App);
