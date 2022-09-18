import Profile from './Profile';
import {
  addPost,
  updateNewPostText,
  getUserProfile,
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
      userId = 2;
    }
    this.props.getUserProfile(userId);
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

export default compose(
  withRouter,
  connect(mapStateToProps, {
    addPost,
    updateNewPostText,
    getUserProfile,
  }),
  withAuthReNavigate
)(ProfileContainer);
