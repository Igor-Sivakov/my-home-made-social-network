import Profile from './Profile';
import { addPostAC, updateNewPostTextAC } from '../../redux/profileReducer';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addPostAC());
    },

    updateNewPostText: (text) => {
      dispatch(updateNewPostTextAC(text));
    },
  };
};

let ProfileConteiner = connect(mapStateToProps, mapDispatchToProps)(Profile);

export default ProfileConteiner;
