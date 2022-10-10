import { stopSubmit } from 'redux-form';
import { authAPI } from '../../componets/API/API';

const SET_USER_DATA = 'auth/SET_USER_DATA';

let initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
};

const authReduser = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};

const setUserData = (id, email, login, isAuth) => ({
  type: SET_USER_DATA,
  payload: { id, email, login, isAuth },
});

export const getAuth = () => async (dispatch) => {
  let response = await authAPI.getAuth();

  let { id, email, login } = response.data.data;
  if (response.data.resultCode === 0) {
    dispatch(setUserData(id, email, login, true));
  }
};

export const signIn = (formData) => async (dispatch) => {
  let response = await authAPI.signIn(formData);

  if (response.data.resultCode === 0) {
    dispatch(getAuth());
  } else {
    let message =
      response.data.messages.length > 0
        ? response.data.messages[0]
        : 'some error';
    dispatch(stopSubmit('login', { _error: message }));
  }
};

export const signOut = () => async (dispatch) => {
  let response = await authAPI.signOut();

  if (response.data.resultCode === 0) {
    dispatch(setUserData(null, null, null, false));
  }
};

export default authReduser;
