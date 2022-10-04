import './ProfileInfo.css';
import userInfoAvatar from './../../../img/userInfoAvatar.jpeg';
import Preloader from '../../common/preloader/preloader';
import ProfileStatus from './ProfileStatus/ProfileStatus';

const ProfileInfo = (props) => {
  if (!props.fullName) {
    return <Preloader />;
  }
  return (
    <div className='card'>
      <div className='card__avatar'>
        <img
          src={props.photos.large != null ? props.photos.large : userInfoAvatar}
          alt='avatar'
        />
      </div>
      <div className='card__wrapper'>
        <h3 className='card__userName__h3'>
          {props.fullName != null ? props.fullName : 'Igor Sivakov'}
        </h3>
        <ProfileStatus
          status={props.status}
          updateUserStatus={props.updateUserStatus}
        />
        <p className='card__info__p card__info__p_mod-marg'>
          {props.aboutMe != null
            ? 'About me: ' + props.aboutMe
            : 'About me: I’ll come back and be stronger'}
        </p>
        <p className='card__info__p'>City: KIEV</p>
        <p className='card__info__p'>Education: KPI'12</p>
        <p className='card__info__p'>
          {props.lookingForAJob != null
            ? 'Looking for a job: ' + props.lookingForAJob
            : 'Looking for a job: //it-kamasutra.com'}
        </p>
      </div>
    </div>
  );
};

export default ProfileInfo;
