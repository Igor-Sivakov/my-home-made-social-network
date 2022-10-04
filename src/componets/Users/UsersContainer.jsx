import { connect } from 'react-redux';
import {
  requestUsers,
  getFollow,
  getUnfollow,
} from '../../redux/reducers/usersReduser';
import React from 'react';
import Users from './UserProfile/Users';
import Preloader from '../common/preloader/preloader';
import { withAuthReNavigate } from '../HOC/withAuthReNavigate';
import { compose } from 'redux';
import {
  getcurrentPage,
  getFollowingInProgress,
  getIsFetching,
  getPageSize,
  getTotalUsersCount,
  getUsers,
} from '../../redux/selectors/usersSelectors';

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.requestUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (pageNumber) => {
    debugger;
    this.props.requestUsers(pageNumber, this.props.pageSize);
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          state={this.props}
          onPageChanged={this.onPageChanged}
          getFollow={this.props.getFollow}
          getUnfollow={this.props.getUnfollow}
        />
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getcurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
  };
};

export default compose(
  connect(mapStateToProps, {
    requestUsers,
    getFollow,
    getUnfollow,
  }),
  withAuthReNavigate
)(UsersContainer);
