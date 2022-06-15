import './UserProfile.css';
import userAvatar from './../../../img/userAvatar.jpeg';

const UserProfile = (props) => {
  debugger;
  return (
    <div className='friend-profile'>
      <div className='friends-profile__item'>
        <img
          src={props.state.avatar}
          className='friends-profile__item__img'
          alt='avatar'
        />
        <button className='friends-profile__item__btn btn'>
          {props.state.subscribe}
        </button>
      </div>
      <div className='friends-profile__info'>
        <div className='friends-profile__info__leftSide'>
          <p className='friends-profile__info__leftSide__name'>
            {props.state.name + ' ' + props.state.familyName}
          </p>
          <p className='friends-profile__info__leftSide__status'>
            {props.state.status}
          </p>
        </div>
        <div className='friends-profile__info__rightSide'>
          <p className='friends-profile__info__rightSide__country'>
            {props.state.country}
          </p>
          <p className='friends-profile__info__rightSide__town'>
            {props.state.city}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
