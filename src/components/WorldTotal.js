import React, { Component } from "react";
import { connect } from "react-redux";
import NumberFormat from "react-number-format";

import "./WorldTotal.scss";

export class WorldTotal extends Component {
  render() {
    const { cases, active, recovered, deaths } = this.props.state;
    return (
      <div className="world-total">
        <div className="infoTile">
          <div className="infoTileHeader">
            <div>
              <h2 className="title">Total confirmed cases</h2>
            </div>
          </div>
          <div className="confirmed">
            <NumberFormat
              value={cases}
              displayType={"text"}
              thousandSeparator={true}
              renderText={(value) => <div>{value}</div>}
            />
          </div>
          <div className="infoTileData">
            <h2 className="legend">
              <div
                className="color"
                style={{ background: "rgb(244, 195, 99" }}
              ></div>
              <div className="description">Active cases</div>
              <div className="total">
                <NumberFormat
                  value={active}
                  displayType={"text"}
                  thousandSeparator={true}
                  renderText={(value) => <div>{value}</div>}
                />
              </div>
            </h2>
            <h2 className="legend">
              <div
                className="color"
                style={{ background: "rgb(96, 187, 105)" }}
              ></div>
              <div className="description">Recovered cases</div>
              <div className="total">
                <NumberFormat
                  value={recovered}
                  displayType={"text"}
                  thousandSeparator={true}
                  renderText={(value) => <div>{value}</div>}
                />
              </div>
            </h2>
            <h2 className="legend">
              <div
                className="color"
                style={{ background: "rgb(118, 118, 118)" }}
              ></div>
              <div className="description">Fatal cases</div>
              <div className="total">
                <NumberFormat
                  value={deaths}
                  displayType={"text"}
                  thousandSeparator={true}
                  renderText={(value) => <div>{value}</div>}
                />
              </div>
            </h2>
          </div>
        </div>
        {/* {todalData.map((data) => data.totalCase)} */}
      </div>
    );
  }
}

const mapStateToProps = ({ totalCaseRuducer }) => {
  return {
    state: totalCaseRuducer,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(WorldTotal);
