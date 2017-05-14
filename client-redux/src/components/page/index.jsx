import React, { PropTypes, Component } from 'react';

export default class Page extends Component{
  render() {
    const { year, currencies } = this.props;
    return <div>
      <p>
        Year { year } | { currencies }
      </p>
    </div>

  }
}

Page.propTypes = {
  year: PropTypes.number.isRequired,
  currencies: PropTypes.array.isRequired
}
