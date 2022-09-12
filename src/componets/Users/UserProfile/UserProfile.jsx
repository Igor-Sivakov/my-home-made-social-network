import './UserProfile.css';
import userAvatar from '../../../img/userAvatar.jpeg';

const UserProfile = (props) => {
  return (
    <div className='friends-profile__wrapper'>
      <div className='friends-profile__item'>
        <img
          src={props.user.photos}
          className='friends-profile__item__img'
          alt='avatar'
        />
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
            Hi guys! Tomorrow I'll be boarding, who's with me?
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
