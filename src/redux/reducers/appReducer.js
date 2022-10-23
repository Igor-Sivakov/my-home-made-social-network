import { getAuth } from './authReducer';

const INITIALIZED_SUCCESS = 'app/INITIALIZED_SUCCESS';
const ADD_GLOBAL_ERROR = 'app/ADD_GLOBAL_ERROR';

let initialState = {
  initialized: false,
  globalError: null,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true,
      };

    case ADD_GLOBAL_ERROR:
      return {
        ...state,
        globalError: action.error,
      };
    default:
      return state;
  }
};

const initializedSuccess = () => ({ type: INITIALIZED_SUCCESS });

const addGlobalError = (error) => ({
  type: ADD_GLOBAL_ERROR,
  error,
});

export const initializeApp = () => (dispatch) => {
  let promise = dispatch(getAuth());
  Promise.all([promise]).then(() => {
    dispatch(initializedSuccess());
  });
};

export const showGlobalError = (error) => async (dispatch) => {
  function resetGlobalError() {
    dispatch(addGlobalError(null));
  }
  await dispatch(addGlobalError(error));
  setTimeout(resetGlobalError, 9000);
};

export default appReducer;
