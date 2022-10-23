import './Users.css';
import UserProfile from './UserProfile/UserProfile';
import Pagination from '../common/Pagination/Pagination';

const Users = ({
  state: { totalUsersCount, pageSize, currentPage, users, ...state },
  onPageChanged,
  ...props
}) => {
  let userProfileElement = users.map((profile) => (
    <UserProfile
      user={profile}
      key={profile.id}
      getFollow={props.getFollow}
      getUnfollow={props.getUnfollow}
      followingInProgress={state.followingInProgress}
    />
  ));

  return (
    <div className='find-friends'>
      <h2 className='main-page__h2'>USERS</h2>
      {userProfileElement}
      <div className='find-friends__pageBtn__inner'>
        <button
          className='find-friends__pageBtn btn'
          onClick={(event) => {
            onPageChanged(currentPage + 1);
          }}
        >
          Show more
        </button>
      </div>
      <Pagination
        totalItemsCount={totalUsersCount}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChanged={onPageChanged}
      />
    </div>
  );
};

export default Users;
