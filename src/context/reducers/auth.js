import {
  REGISTER_ERROR,
  REGISTER_LOADING,
  REGISTER_SUCCESS,
} from '../../constants/actionTypes';

const auth = (state, action) => {
  switch (action.type) {
    case REGISTER_LOADING:
      return {
        ...state,
        loading: true,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        isLoggedIn: true,
        data: action.payload,
      };
    case REGISTER_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case 'LOGIN':
      return state;
    default:
      return state;
  }
};

export default auth;
