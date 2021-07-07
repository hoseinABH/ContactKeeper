import {
  REGISTER_ERROR,
  REGISTER_LOADING,
  REGISTER_SUCCESS,
} from '../../../constants/actionTypes';
import axios from '../../../helpers/axios';

export default ({
    email,
    password,
    username,
    firstName: first_name,
    lastName: last_name,
  }) =>
  dispatch =>
  onSuccess => {
    dispatch({type: REGISTER_LOADING});
    axios
      .post('auth/register', {
        first_name,
        last_name,
        email,
        username,
        password,
      })
      .then(res => {
        dispatch({type: REGISTER_SUCCESS, payload: res.data});
        onSuccess(res.data);
      })
      .catch(err => {
        dispatch({
          type: REGISTER_ERROR,
          payload: err.response
            ? err.response.data
            : {error: 'Something went wrong, try agin'},
        });
      });
  };
