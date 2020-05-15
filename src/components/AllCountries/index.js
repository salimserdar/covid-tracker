import React, { Component } from "react";
import { connect } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import NumberFormat from "react-number-format";
import { getSelectedCountry } from '../../actions/selectedCountry'

import "./AllCountries.scss";

export class AllCountries extends Component {
  render() {
    const { allCountryCases } = this.props;
    // console.log("AllCountries", allCountryCases);
    return (
      <div className="all-countries">
        <ul className="all-countries__list">
          {allCountryCases.map((countryCase) => (
            <li key={uuidv4()} onClick={() => this.props.getSelectedCountry(countryCase.country)}>
              <span className="all-countries__flag">
                <img src={countryCase.countryInfo.flag} alt={countryCase.country} />
              </span>
              <span>{countryCase.country}</span>
              <NumberFormat
                value={countryCase.cases}
                displayType={"text"}
                thousandSeparator={true}
                renderText={(value) => <span>{value}</span>}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({ allCountryCases }) => {
  return {
    allCountryCases,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getSelectedCountry: (country) => dispatch(getSelectedCountry(country))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(AllCountries);
