import FriendItem from './FriendItem/FriendItem';
import './FriendsFrame.css';

const FriendsFrame = (props) => {
  let sideBarElements = props.state.friendsData.map((friend) => {
    return <FriendItem state={friend} key={friend.id} />;
  });

  return (
    <div className='fiendsFrame'>
      <h2 className='main-page__h2'>FRIENDS</h2>
      <div className='fiendsFrame__wrapper'>{sideBarElements}</div>
    </div>
  );
};

export default FriendsFrame;
