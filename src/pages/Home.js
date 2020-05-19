import React, { Component } from "react";
import Header from "../components/Header";
import LeftSide from "../layout/LeftSide";
import Body from "../layout/Body";
import { connect } from "react-redux";
import { getTotal } from "../actions/totalData/getTotalData";
import { getAllCounties } from "../actions/allCounties/getAllCounties";
import { getSelectedCountry } from "../actions/selectedCountry";

import './Home.scss'

class Home extends Component {
  componentDidMount() {
    this.props.getTotal();
    this.props.getAllCounties();
    this.props.getSelectedCountry("USA");
  }

  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          background: "rgba(247, 247, 247, 1)",
          height: "100vh",
        }}
      >
        <Header />
        <div className="home-body">
          <LeftSide />
          <Body />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getTotal: () => dispatch(getTotal()),
    getAllCounties: () => dispatch(getAllCounties()),
    getSelectedCountry: (country) => dispatch(getSelectedCountry(country)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
