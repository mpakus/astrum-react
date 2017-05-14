import React, { Component } from 'react';
import { connect } from 'react-redux';
import User from '../../components/user';
import Page from '../../components/page';
import './index.css';

class App extends Component {
  render() {
    const { user, page } = this.props;
    return (
      <div>
        <User name={user.name} email={user.email} />
        <Page currencies={page.currencies} year={page.year} />
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
