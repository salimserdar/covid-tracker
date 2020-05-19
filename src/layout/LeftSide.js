import React, { Component } from "react";
import WorldTotal from "../components/WorldTotal";
import "./LeftSide.scss";
import AllCountries from "../components/AllCountries";
import FilterCountry from "../components/FilterCountry/FilterCountry";
import SortData from "../components/SortData";

export class LeftSide extends Component {
  render() {
    return (
      <div className="left-sidebar">
        <WorldTotal />
        {/* <SortData /> */}
        <FilterCountry />
        <AllCountries />
      </div>
    );
  }
}

export default LeftSide;
