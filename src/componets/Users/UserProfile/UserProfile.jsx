import './UserProfile.css';
import userAvatar from '../../../img/userAvatar.jpeg';
import { NavLink } from 'react-router-dom';

const UserProfile = (props) => {
  return (
    <div className='friends-profile__wrapper'>
      <div className='friends-profile__item'>
        <NavLink to={'/Profile/' + props.user.id}>
          <img
            src={
              props.user.photos.small != null
                ? props.user.photos.small
                : userAvatar
            }
            className='friends-profile__item__img'
            alt='avatar'
          />
        </NavLink>
        {props.user.followed ? (
          <button
            onClick={() => props.unfollow(props.user.id)}
            className='friends-profile__item__btn btn'
          >
            Unfollow
          </button>
        ) : (
          <button
            onClick={() => props.follow(props.user.id)}
            className='friends-profile__item__btn btn'
          >
            Follow
          </button>
        )}
      </div>
      <div className='friends-profile__info'>
        <div className='friends-profile__info__leftSide'>
          <p className='friends-profile__info__leftSide__name'>
            {props.user.name}
          </p>
          <p className='friends-profile__info__leftSide__status'>
            {props.user.status != null
              ? props.user.status
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
