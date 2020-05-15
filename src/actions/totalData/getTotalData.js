import axios from 'axios'
import { API } from '../../config'

export const getTotal = () => {
    return dispatch => {
      axios
        .get(`${API}all/`)
        .then(res => {
          dispatch({type: 'GET_TOTAL', payload: res.data});
        })
        .catch(err => {
          // dispatch(addTodoFailure(err.message));
          console.log(err)
        });
    };
};