import React, { PropTypes, Component } from 'react';

export default class User extends Component{
  render() {
    const { name, email } = this.props;
    return <div>
      <p>
        Hello { name } | { email }
      </p>
    </div>
  }
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired
};
