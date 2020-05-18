import React, { Component } from "react";
import { connect } from "react-redux";
import "./SortData.scss";
import { ReactComponent as ArrowDown } from "../../assets/svg/ArrowDown.svg";
import { ReactComponent as DecIcon } from "../../assets/svg/DecIcon.svg";
import { ReactComponent as IncIcon } from "../../assets/svg/IncIcon.svg";
import { ReactComponent as AzIcon } from "../../assets/svg/AzIcon.svg";
import { ReactComponent as ZaIcon } from "../../assets/svg/ZaIcon.svg";
import { getSortedDec } from '../../actions/allCounties/getAllCounties'

export class SortData extends Component {
  state = {
    toggle: false,
    icon: "ArrowDown",
  };

  onToggleHandle = () => {
    this.setState((prevState) => ({
      toggle: !prevState.toggle,
    }));
  };

  onDropdownItem = (e) => {
    let selectedAtt = e.currentTarget.getAttribute('data-typedropitem');

    // if (selectedAtt === 'DecIcon') {
    //   this.props.getSortedDec();
    // }

    this.setState((prevState) => ({
      toggle: !prevState.toggle,
      icon: selectedAtt
    }));
  };

  render() {
    const { icon } = this.state;

    const dropDownOff = {
      display: "none",
    };

    const dropDownOn = {
      display: "block",
    };

    let selectedSVG;
    let selectedItemText;

    switch (icon) {
      case "DecIcon":
        selectedSVG = <DecIcon />;
        selectedItemText = 'Total cases';
        break;
      case "IncIcon":
        selectedSVG = <IncIcon />;
        selectedItemText = 'Total cases';
        break;
      case "AzIcon":
        selectedSVG = <AzIcon />;
        selectedItemText = 'Alphabetical';
        break;
      case "ZaIcon":
        selectedSVG = <ZaIcon />;
        selectedItemText = 'Alphabetical';
        break;
      default:
        selectedSVG = <ArrowDown />;
        selectedItemText= 'Sort'
    }

    return (
      <div className="sort-data">
        <span>Browse</span>
        <div id="select-sort-data" onClick={this.onToggleHandle}>
          <span>{selectedItemText}</span>
          <div className="sortMenuIcon">{selectedSVG}</div>
        </div>
        <div
          className="sortDropdown"
          style={this.state.toggle ? dropDownOn : dropDownOff}
        >
          <div
            className="sortDropdownItem"
            data-typedropitem="DecIcon"
            onClick={this.onDropdownItem}
          >
            <span>Total cases</span>
            <div className="sortDropDownItemIcon">
              <DecIcon />
            </div>
          </div>
          <div
            className="sortDropdownItem"
            data-typedropitem="IncIcon"
            onClick={this.onDropdownItem}
          >
            <span>Total cases</span>
            <div className="sortDropDownItemIcon">
              <IncIcon />
            </div>
          </div>
          <div
            className="sortDropdownItem"
            data-typedropitem="AzIcon"
            onClick={this.onDropdownItem}
          >
            <span>Alphabetical</span>
            <div className="sortDropDownItemIcon">
              <AzIcon />
            </div>
          </div>
          <div
            className="sortDropdownItem"
            data-typedropitem="ZaIcon"
            onClick={this.onDropdownItem}
          >
            <span>Alphabetical</span>
            <div className="sortDropDownItemIcon">
              <ZaIcon />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = (dispatch) => {
  return {
    getSortedDec: dispatch(getSortedDec())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SortData);
