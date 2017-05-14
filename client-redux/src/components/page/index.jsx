import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Page extends Component{
  onYearBtnClick(e){
    this.props.setYear(+e.target.innerText);
  }
  render() {
    const { year, currencies } = this.props;
    return <div>
      <p>
        <button onClick={this.onYearBtnClick.bind(this)}>2015</button>
        <button onClick={this.onYearBtnClick.bind(this)}>2016</button>
        <button onClick={this.onYearBtnClick.bind(this)}>2017</button>
      </p>
      <p>
        Year { year } | { currencies }
      </p>
    </div>

  }
}

Page.propTypes = {
  year: PropTypes.number.isRequired,
  currencies: PropTypes.array.isRequired,
  setYear: PropTypes.func.isRequired
}
