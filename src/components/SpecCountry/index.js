import React, { Component } from "react";
import { connect } from "react-redux";
import NumberFormat from "react-number-format";

import "./SpecCountry.scss";

export class SpecCountry extends Component {

  state = {
    totalPercentage: 0,
    recoveredPercentage: 0,
    fatalPercentage: 0,
  }

  render() {
    const { country } = this.props;

    let totalData = country.cases + country.recovered + country.deaths;

    const casePercentage = ((country.cases / totalData ) * 100) + '%'; 

    const recoveredPercentage = ((country.recovered / totalData ) * 100) + '%'; 

    const fatalPercentage = ((country.deaths / totalData ) * 100) + '%'; 

    return (
      <>
        <div className="spec-country-header">
          <span className="country-name">{country.country}</span>
        </div>
        <div className="spec-country">
          <h3>Overview</h3>
          <div className="percentage-graph">
            <div className="totalCase" style={{width: casePercentage, height: '7px',  borderRadius: '10px', background: "rgb(244, 195, 99", marginRight: '4px' }}></div>
            <div className="totalCase" style={{width: recoveredPercentage, height: '7px',  borderRadius: '10px', background: "rgb(96, 187, 105", marginRight: '4px' }}></div>
            <div className="totalCase" style={{width: fatalPercentage, height: '7px',  borderRadius: '10px', background: "rgb(118, 118, 118)" }}></div>
          </div>
          <div className="spec-country__content">
            <span className="value total-case">
              <NumberFormat
                value={country.cases}
                displayType={"text"}
                thousandSeparator={true}
                renderText={(value) => <span>{value}</span>}
              />
            </span>
            <div className="spec-country__row">
              <span className="row-data">
                <div
                  className="color"
                  style={{ background: "rgb(244, 195, 99" }}
                ></div>
                Active Cases:
                <span className="value">
                  <NumberFormat
                    value={country.active}
                    displayType={"text"}
                    thousandSeparator={true}
                    renderText={(value) => <span>{value}</span>}
                  />

                  <span className="today-data">
                    <p>+</p>
                    <NumberFormat
                      value={country.todayCases}
                      displayType={"text"}
                      thousandSeparator={true}
                      renderText={(value) => <span>{value}</span>}
                    />
                  </span>
                </span>
              </span>

              <span className="row-data">
                <div
                  className="color"
                  style={{ background: "rgb(96, 187, 105)" }}
                ></div>
                Recovered:
                <span className="value">
                  <NumberFormat
                    value={country.recovered}
                    displayType={"text"}
                    thousandSeparator={true}
                    renderText={(value) => <span>{value}</span>}
                  />
                </span>
              </span>

              <span className="row-data">
                <div
                  className="color"
                  style={{ background: "rgb(118, 118, 118)" }}
                ></div>
                Fatal cases:
                <span className="value">
                  <NumberFormat
                    value={country.deaths}
                    displayType={"text"}
                    thousandSeparator={true}
                    renderText={(value) => <span>{value}</span>}
                  />

                  <span className="today-data">
                    <p>+</p>
                    <NumberFormat
                      value={country.todayDeaths}
                      displayType={"text"}
                      thousandSeparator={true}
                      renderText={(value) => <span>{value}</span>}
                    />
                  </span>
                </span>
              </span>
            </div>
          </div>
        </div>
      </>
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
