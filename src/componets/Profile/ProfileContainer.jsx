import Profile from './Profile';
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from '../../redux/profileReducer';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addPostActionCreator());
    },

    updateNewPostText: (text) => {
      dispatch(updateNewPostTextActionCreator(text));
    },
  };
};

let ProfileConteiner = connect(mapStateToProps, mapDispatchToProps)(Profile);

export default ProfileConteiner;
