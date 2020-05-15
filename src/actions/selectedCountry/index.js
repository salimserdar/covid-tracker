import axios from 'axios'
import { API } from '../../config'

export const getSelectedCountry = (countryName) => {
    return dispatch => {
      axios
        .get(`${API}countries/${countryName}`)
        .then(res => {
          dispatch({type: 'SELECT_COUNTRY', payload: res.data});
        })
        .catch(err => {
          // dispatch(addTodoFailure(err.message));
          console.log(err)
        });
    };
};