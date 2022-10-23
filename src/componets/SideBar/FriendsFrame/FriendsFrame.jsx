import FriendItem from './FriendItem/FriendItem';
import './FriendsFrame.css';

const FriendsFrame = ({ peoples, getUserProfile, isAuth }) => {
  let sideBarElements = peoples.map((people) => {
    if (people.name.length < 16 && isAuth) {
      return (
        <FriendItem
          state={people}
          key={people.id}
          getUserProfile={getUserProfile}
        />
      );
    }
  });

  if (isAuth) {
    return (
      <div className='fiendsFrame'>
        <h2 className='fiendsFrame__h2'>
          <span>People</span>
          <br /> you may know
        </h2>
        <div className='fiendsFrame__wrapper'>{sideBarElements}</div>
      </div>
    );
  }
};

export default FriendsFrame;
