import { applyMiddleware, combineReducers, legacy_createStore } from 'redux';
import authReduser from './authReducer';
import dialogsReducer from './dialogsReducer';
import profileReducer from './profileReducer';
import sideBarReducer from './sideBarReducer';
import usersReduser from './usersReduser';
import thunkMiddleware from 'redux-thunk';

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sideBar: sideBarReducer,
  usersPage: usersReduser,
  auth: authReduser,
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
