import React, { Component } from 'react';
import { connect } from 'react-redux';
import './index.css';

class App extends Component {
  render() {
    const { name: user_name, email: user_email } = this.props.user;
    const { year: page_year, currencies: page_currencies } = this.props.page;
    return (
      <div className="App">
        <p>
          Hello { user_name } | { user_email }
        </p>
        <p>
          Year { page_year } | { page_currencies }
        </p>

      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    user: state.user,
    page: state.page
  }
}

export default connect(mapStateToProps)(App);
