import { stopSubmit } from 'redux-form';
import { authAPI, securityApi } from '../../componets/API/API';

const SET_USER_DATA = 'auth/SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'auth/GET_CAPTCHA_URL_SUCCESS';

let initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
  captchaUrl: null, // if null, then captcha is not required
};

const authReduser = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
    case GET_CAPTCHA_URL_SUCCESS:
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

const getCaptchaUrlSuccess = (captchaUrl) => ({
  type: GET_CAPTCHA_URL_SUCCESS,
  payload: { captchaUrl },
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
    // success, get auth data
    dispatch(getAuth());
  } else {
    if (response.data.resultCode === 10) {
      // if required captcha, get captcha url
      dispatch(getCaptchaUrl());
    }

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

export const getCaptchaUrl = () => async (dispatch) => {
  let response = await securityApi.getCaptchaUrl();
  let captchaUrl = response.data.url;
  dispatch(getCaptchaUrlSuccess(captchaUrl));
};

export default authReduser;
