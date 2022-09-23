import FriendItem from './FriendItem/FriendItem';
import './FriendsFrame.css';

const FriendsFrame = (props) => {
  let sideBarElements = props.state.friendsData.map((friend) => {
    if (friend.name.length < 16) {
      return (
        <FriendItem
          state={friend}
          key={friend.id}
          getUserProfile={props.getUserProfile}
        />
      );
    }
  });

  return (
    <div className='fiendsFrame'>
      <h2 className='fiendsFrame__h2'>
        <span>People</span>
        <br /> you may know
      </h2>
      <div className='fiendsFrame__wrapper'>{sideBarElements}</div>
    </div>
  );
};

export default FriendsFrame;
