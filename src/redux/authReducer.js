import { authAPI } from './../componets/API/API';

const SET_USER_DATA = 'SET_USER_DATA';
const SET_AUTH_SIGN = 'SET_AUTH_SIGN';

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
        ...action.data,
        isAuth: true,
      };

    default:
      return state;
  }
};

export const setUserData = (id, email, login) => ({
  type: SET_USER_DATA,
  data: { id, email, login },
});

export const getAuth = () => {
  return (dispatch) => {
    authAPI.getAuth().then((data) => {
      let { id, email, login } = data.data;
      if (data.resultCode === 0) {
        dispatch(setUserData(id, email, login));
      }
    });
  };
};

export const signIn = (formData) => {
  return (dispatch) => {
    authAPI.signIn(formData).then((response) => {
      if (response.data.resultCode === 0) {
        authAPI.getAuth().then((data) => {
          let { id, email, login } = data.data;
          if (data.resultCode === 0) {
            dispatch(setUserData(id, email, login));
          }
        });
      }
    });
  };
};

export default authReduser;
