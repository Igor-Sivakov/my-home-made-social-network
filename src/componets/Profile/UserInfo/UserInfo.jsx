import './UserInfo.css';

const UserInfo = () => {
  return (
    <div className='card'>
      <div className='card__avatar'>
        <img
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOi6B1EjD4lkdZg4ClLhWTxjsfVQVRsdW1aw&usqp=CAU'
          alt='avatar'
        />
      </div>
      <div className='card__info'>
        <h3 className='card__h3'>Igor Sivakov</h3>
        <p className='card__p'>Date of birth: 19th october</p>
        <p className='card__p'>City: KIEV</p>
        <p className='card__p'>Education: KPI'12</p>
        <p className='card__p'>Web site: //it-kamasutra.com</p>
      </div>
    </div>
  );
};

export default UserInfo;
