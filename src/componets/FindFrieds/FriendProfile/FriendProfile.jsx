import './FriendProfile.css';

const FriendProfile = () => {
  return (
    <div className='friend-profile'>
      <div className='friends-profile__item'>
        <img
          src='https://freelance.ru/img/portfolio/pics/00/36/88/3573970.jpg'
          className='friends-profile__item__img'
          alt='avatar'
        />
        <button className='friends-profile__item__btn'></button>
      </div>
      <div className='friends-profile__item__info'></div>
    </div>
  );
};

export default FriendProfile;
