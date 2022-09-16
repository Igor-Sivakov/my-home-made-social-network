import Profile from './Profile';
import {
  addPost,
  updateNewPostText,
  setUserProfile,
} from '../../redux/profileReducer';
import { connect } from 'react-redux';
import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { profileAPI } from './../API/API';

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.router.params.userId;
    if (!userId) {
      userId = 2;
    }

    profileAPI.getProfile(userId).then((data) => {
      this.props.setUserProfile(data);
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

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }

  return ComponentWithRouterProp;
}

export default connect(mapStateToProps, {
  addPost,
  updateNewPostText,
  setUserProfile,
})(withRouter(ProfileContainer));
