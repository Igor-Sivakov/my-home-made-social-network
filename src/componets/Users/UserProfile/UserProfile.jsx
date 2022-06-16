import './UserProfile.css';

const UserProfile = (props) => {
  return (
    <div className='friends-profile__wrapper'>
      <div className='friends-profile__item'>
        <img
          src={props.user.avatar}
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
            {props.user.name + ' ' + props.user.familyName}
          </p>
          <p className='friends-profile__info__leftSide__status'>
            {props.user.status}
          </p>
        </div>
        <div className='friends-profile__info__rightSide'>
          <p className='friends-profile__info__rightSide__country'>
            {props.user.country}
          </p>
          <p className='friends-profile__info__rightSide__town'>
            {props.user.city}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
