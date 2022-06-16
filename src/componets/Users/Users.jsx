import './Users.css';
import UserProfile from './UserProfile/UserProfile';

const Users = (props) => {
  let userProfileElement = props.users.usersData.map((profile) => (
    <UserProfile
      user={profile}
      key={profile.id}
      follow={props.follow}
      unfollow={props.unfollow}
    />
  ));
  return (
    <div className='find-friends'>
      <h2 className='main-page__h2'>USERS</h2>
      {userProfileElement}
      <div className='find-friends__pageBtn__inner'>
        <button className='find-friends__pageBtn btn'>Show more</button>
      </div>
    </div>
  );
};

export default Users;
