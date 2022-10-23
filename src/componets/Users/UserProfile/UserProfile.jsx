import './UserProfile.css';
import userAvatar from '../../../img/userAvatar.jpeg';
import { NavLink } from 'react-router-dom';

const UserProfile = ({
  user: { id, photos, followed, name, status },
  followingInProgress,
  getUnfollow,
  getFollow,
}) => {
  return (
    <div className='friends-profile__wrapper'>
      <div className='friends-profile__item'>
        <NavLink to={'/Profile/' + id}>
          <img
            src={photos.small != null ? photos.small : userAvatar}
            className='friends-profile__item__img'
            alt='avatar'
          />
        </NavLink>
        {followed ? (
          <button
            disabled={followingInProgress.some((iD) => iD === id)}
            onClick={() => {
              getUnfollow(id);
            }}
            className='friends-profile__item__btn btn'
          >
            Unfollow
          </button>
        ) : (
          <button
            disabled={followingInProgress.some((iD) => iD === id)}
            onClick={() => {
              getFollow(id);
            }}
            className='friends-profile__item__btn btn'
          >
            Follow
          </button>
        )}
      </div>
      <div className='friends-profile__info'>
        <div className='friends-profile__info__leftSide'>
          <p className='friends-profile__info__leftSide__name'>{name}</p>
          <p className='friends-profile__info__leftSide__status'>
            {status != null
              ? status
              : 'Hi guys! Tomorrow I will be boarding, who is with me?'}
          </p>
        </div>
        <div className='friends-profile__info__rightSide'>
          <p className='friends-profile__info__rightSide__country'>Ukrain</p>
          <p className='friends-profile__info__rightSide__town'>Kiev</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
