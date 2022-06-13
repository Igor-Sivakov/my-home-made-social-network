import './UserInfo.css';
import userInfoAvatar from './../../../img/userInfoAvatar.jpeg';

const UserInfo = () => {
  return (
    <div className='card'>
      <div className='card__avatar'>
        <img src={userInfoAvatar} alt='avatar' />
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
