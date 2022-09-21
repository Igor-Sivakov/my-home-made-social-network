import Profile from './Profile';
import {
  addPost,
  getUserProfile,
  getUserStatus,
  updateUserStatus,
} from '../../redux/profileReducer';
import { connect } from 'react-redux';
import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { withAuthReNavigate } from '../HOC/withAuthReNavigate';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.router.params.userId;
    if (!userId) {
      userId = this.props.authUserId;
    }
    this.props.getUserProfile(userId);
    this.props.getUserStatus(userId);
  }

  render() {
    return (
      <>
        <Profile
          {...this.props}
          updateUserStatus={this.props.updateUserStatus}
        />
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage,
    authUserId: state.auth.id,
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
  }),
  withAuthReNavigate
)(ProfileContainer);
