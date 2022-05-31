import FriendItem from './FriendItem/FriendItem';
import './FriendsFrame.css';

const FriendsFrame = (props) => {
  let sideBarElements = props.state.friendsData.map((friend) => {
    if (friend.id <= 9) {
      return <FriendItem state={friend} />;
    }
  });

  return (
    <div className='fiendsFarame'>
      <h2 className='main-page__h2'>FRIENDS</h2>
      <div className='fiendsFarame__wrapper'>{sideBarElements}</div>
    </div>
  );
};

export default FriendsFrame;
