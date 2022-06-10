import './FindFriends.css';
import FriendProfile from './FriendProfile/FriendProfile';

const FindFriends = () => {
  return (
    <div className='find-friends'>
      <h2 className='main-page__h2'>USERS</h2>
      <FriendProfile />
      <FriendProfile />
      <FriendProfile />
      <FriendProfile />
    </div>
  );
};

export default FindFriends;
