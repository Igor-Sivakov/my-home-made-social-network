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
      <FriendProfile />
      <div className='find-friends__pageBtn__inner'>
        <button className='find-friends__pageBtn btn'>Show more</button>
      </div>
    </div>
  );
};

export default FindFriends;
