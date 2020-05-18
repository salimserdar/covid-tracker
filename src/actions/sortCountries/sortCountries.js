import axios from 'axios'
import { API } from '../../config'

export const getAllCounties = () => {
    return dispatch => {
      axios
        .get(`${API}countries/`)
        .then(res => {
          dispatch({type: 'GET_ALL_COUNTRIES', payload: res.data});
        })
        .catch(err => {
          // dispatch(addTodoFailure(err.message));
          console.log(err)
        });
    };
};