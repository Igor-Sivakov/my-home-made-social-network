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
        <button className='friends-profile__item__btn'>Follow</button>
      </div>
      <div className='friends-profile__info'>
        <div className='friends-profile__info__leftSide'>
          <p className='friends-profile__info__leftSide__name'>Mark Presly</p>
          <p className='friends-profile__info__leftSide__status'>
            Lorem ipsum dolor sit Lorem ipsum dolor sit amet ,
          </p>
        </div>
        <div className='friends-profile__info__rightSide'>
          <p className='friends-profile__info__rightSide__country'>
            United Kingdom
          </p>
          <p className='friends-profile__info__rightSide__town'>London</p>
        </div>
      </div>
    </div>
  );
};

export default FriendProfile;
