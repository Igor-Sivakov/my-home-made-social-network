import './Users.css';
import UserProfile from './UserProfile/UserProfile';
import React from 'react';
import * as axios from 'axios';

class Users extends React.Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  }

  onChangeNumber = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  };

  userProfileElement = this.props.users.usersData.map((profile) => (
    <UserProfile
      user={profile}
      key={profile.id}
      follow={this.props.follow}
      unfollow={this.props.unfollow}
    />
  ));

  render() {
    let pagesCount = Math.ceil(
      this.props.totalUsersCount / this.props.pageSize
    );

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }

    let curP = this.props.currentPage;
    let curPF = curP - 5 < 0 ? 0 : curP - 5;
    let curPL = curP + 5;
    let slicedPages = pages.slice(curPF, curPL);

    return (
      <div className='find-friends'>
        <h2 className='main-page__h2'>USERS</h2>
        {this.userProfileElement}
        <div className='find-friends__pageBtn__inner'>
          <button className='find-friends__pageBtn btn'>Show more</button>
        </div>
        <div className='find-friends__pagination'>
          {pages.map((page) => {
            return (
              <span
                className={this.props.currentPage === page && 'selected__page'}
                onClick={(event) => {
                  this.onChangeNumber(page);
                }}
              >
                {page}
              </span>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Users;
