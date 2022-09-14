import Profile from './Profile';
import {
  addPost,
  updateNewPostText,
  setUserProfile,
} from '../../redux/profileReducer';
import { connect } from 'react-redux';
import React from 'react';
import * as axios from 'axios';

class ProfileConteiner extends React.Component {
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
      .then((response) => {
        this.props.setUserProfile(response.data);
      });
  }

  render() {
    return (
      <>
        <Profile {...this.props} />
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage,
  };
};

export default connect(mapStateToProps, {
  addPost,
  updateNewPostText,
  setUserProfile,
})(ProfileConteiner);
