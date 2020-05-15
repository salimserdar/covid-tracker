import React, { Component } from "react";
import { connect } from "react-redux";
import NumberFormat from "react-number-format";

import "./SpecCountry.scss";

export class SpecCountry extends Component {
  render() {
    const { country } = this.props;
    return (
      <div className="spec-country">
        <div className="spec-country__left">
          <span className="country-name">{country.country}</span>
          {country.countryInfo ? (
            <img
              src={country.countryInfo.flag}
              alt={country.country + " flags"}
            />
          ) : null}
        </div>
        <div className="spec-country__right">
          <div className="spec-country__row">
            <span>
              Active Cases:{" "}
              <span className="value">
                {" "}
                <NumberFormat
                  value={country.active}
                  displayType={"text"}
                  thousandSeparator={true}
                  renderText={(value) => <span>{value}</span>}
                />
              </span>
            </span>
            <span>
              Cases:{" "}
              <span className="value">
                {" "}
                <NumberFormat
                  value={country.cases}
                  displayType={"text"}
                  thousandSeparator={true}
                  renderText={(value) => <span>{value}</span>}
                />
              </span>
            </span>
            <span>
              Today's Cases:{" "}
              <span className="value">
                {" "}
                <NumberFormat
                  value={country.todayCases}
                  displayType={"text"}
                  thousandSeparator={true}
                  renderText={(value) => <span>{value}</span>}
                />
              </span>
            </span>
          </div>
          <div className="spec-country__row">
            <span>
              Recovered:{" "}
              <span className="value">
                {" "}
                <NumberFormat
                  value={country.recovered}
                  displayType={"text"}
                  thousandSeparator={true}
                  renderText={(value) => <span>{value}</span>}
                />
              </span>
            </span>
            <span>
              Deaths:{" "}
              <span className="value">
                {" "}
                <NumberFormat
                  value={country.deaths}
                  displayType={"text"}
                  thousandSeparator={true}
                  renderText={(value) => <span>{value}</span>}
                />
              </span>
            </span>
            <span>
              Today's Deaths:{" "}
              <span className="value">
                {" "}
                <NumberFormat
                  value={country.todayDeaths}
                  displayType={"text"}
                  thousandSeparator={true}
                  renderText={(value) => <span>{value}</span>}
                />
              </span>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ selectedCountryReducer }) => {
  return {
    country: selectedCountryReducer,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SpecCountry);
