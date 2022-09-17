import { connect } from 'react-redux';
import { getUsers, getFollow, getUnfollow } from '../../redux/usersReduser';
import React from 'react';
import Users from './UserProfile/Users';
import Preloader from '../common/preloader/preloader';

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.pageSize);
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
    users: state.usersPage.usersData,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
  };
};

export default connect(mapStateToProps, {
  getUsers,
  getFollow,
  getUnfollow,
})(UsersContainer);
