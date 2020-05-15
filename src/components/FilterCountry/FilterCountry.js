import React, { useState, useEffect } from "react";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { connect } from 'react-redux'
import { getSelectedCountry } from '../../actions/selectedCountry'
import './FilterCountry.scss';

const FilterCountry = ({getSelectedCountry, allCountry}) => {

  const [country, setCountry] = useState('');

  useEffect(() => {
    console.log(country)
  })

  return (
    <div className="filter-country">
      <Autocomplete
        id="combo-box-demo"
        options={allCountry}
        getOptionLabel={(option) => option.country}
        style={{ width: 300 }}
        // value={country}
        onChange={(event, value) => value !== null ? getSelectedCountry(value.country) : null}
        // onChange={(event, value) => console.log(value)}
        renderInput={(params) => (
          <TextField {...params} label="Filter Country" variant="outlined" />
        )}
      />
    </div>
  );

};

const mapStateToProps = ({allCountryCases}) => {
  return {
    allCountry: allCountryCases
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getSelectedCountry: (country) => dispatch(getSelectedCountry(country))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterCountry);
