import Profile from './Profile';
import {
  addPost,
  getUserProfile,
  getUserStatus,
  updateUserStatus,
  savePhoto,
  saveProfileUpdate,
  updateProfileExtraState,
} from '../../redux/reducers/profileReducer';
import { connect } from 'react-redux';
import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { withAuthReNavigate } from '../HOC/withAuthReNavigate';
import { compose } from 'redux';
import {
  getPostsData,
  getProfileAboutMe,
  getProfileFullName,
  getProfileLookingForAJob,
  getProfilePhotos,
  getProfileStatus,
  getProfile,
  getProfileExtra,
} from '../../redux/selectors/profileSelectors';
import { getAuthId } from '../../redux/selectors/authSelectors';

class ProfileContainer extends React.Component {
  refreshProfile() {
    let userId = this.props.router.params.userId;
    if (!userId) {
      userId = this.props.authUserId;
    }
    this.props.getUserProfile(userId);
    this.props.getUserStatus(userId);
  }

  componentDidMount() {
    this.refreshProfile();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.router.params.userId !== this.props.router.params.userId) {
      this.refreshProfile();
    }
  }

  render() {
    return (
      <>
        <Profile
          {...this.props}
          updateUserStatus={this.props.updateUserStatus}
          savePhoto={this.props.savePhoto}
          saveProfileUpdate={this.props.saveProfileUpdate}
          updateProfileExtraState={this.props.updateProfileExtraState}
        />
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    postsData: getPostsData(state),
    photos: getProfilePhotos(state),
    fullName: getProfileFullName(state),
    aboutMe: getProfileAboutMe(state),
    lookingForAJob: getProfileLookingForAJob(state),
    status: getProfileStatus(state),
    authUserId: getAuthId(state),
    profile: getProfile(state),
    profileExtra: getProfileExtra(state),
  };
};

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }

  return ComponentWithRouterProp;
}

export default compose(
  withRouter,
  connect(mapStateToProps, {
    addPost,
    getUserProfile,
    getUserStatus,
    updateUserStatus,
    savePhoto,
    saveProfileUpdate,
    updateProfileExtraState,
  }),
  withAuthReNavigate
)(ProfileContainer);
