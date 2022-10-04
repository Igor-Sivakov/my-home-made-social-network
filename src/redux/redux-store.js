import { applyMiddleware, combineReducers, legacy_createStore } from 'redux';
import authReduser from './reducers/authReducer';
import dialogsReducer from './reducers/dialogsReducer';
import profileReducer from './reducers/profileReducer';
import sideBarReducer from './reducers/sideBarReducer';
import usersReduser from './reducers/usersReduser';
import appReducer from './reducers/appReducer';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sideBar: sideBarReducer,
  usersPage: usersReduser,
  auth: authReduser,
  form: formReducer,
  app: appReducer,
});

let store = legacy_createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;

/* let store = configureStore({
  reducer: {
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sideBar: sideBarReducer,
  },
}); */
