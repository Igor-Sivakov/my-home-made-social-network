import { configureStore } from '@reduxjs/toolkit';
import dialogsReducer from './dialogsReducer';
import profileReducer from './profileReducer';
import sideBarReducer from './sideBarReducer';

let store = configureStore({
  reducer: {
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sideBar: sideBarReducer,
  },
});

export default store;
