import './Users.css';
import UserProfile from './UserProfile/UserProfile';
import * as axios from 'axios';

const Users = (props) => {
  /*  if (props.users.usersData.length === 5) {
    axios
      .get('https://social-network.samuraijs.com/api/1.0/users')
      .then((response) => {
        props.setUsers(response.data.items);
        console.log(response.data.items);
      });
  }
  */
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
