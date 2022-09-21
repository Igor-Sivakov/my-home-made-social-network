import './ProfileInfo.css';
import userInfoAvatar from './../../../img/userInfoAvatar.jpeg';
import Preloader from '../../common/preloader/preloader';
import ProfileStatus from './ProfileStatus/ProfileStatus';

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div className='card'>
      <div className='card__avatar'>
        <img
          src={
            props.profile.photos.large != null
              ? props.profile.photos.large
              : userInfoAvatar
          }
          alt='avatar'
        />
      </div>
      <div className='card__wrapper'>
        <h3 className='card__userName__h3'>
          {props.profile.fullName != null
            ? props.profile.fullName
            : 'Igor Sivakov'}
        </h3>
        <ProfileStatus
          status={props.status}
          updateUserStatus={props.updateUserStatus}
        />
        <p className='card__info__p card__info__p_mod-marg'>
          {props.profile.aboutMe != null
            ? 'About me: ' + props.profile.aboutMe
            : 'About me: I’ll come back and be stronger'}
        </p>
        <p className='card__info__p'>City: KIEV</p>
        <p className='card__info__p'>Education: KPI'12</p>
        <p className='card__info__p'>
          {props.profile.lookingForAJobDescription != null
            ? 'Looking for a job: ' + props.profile.lookingForAJobDescription
            : 'Looking for a job: //it-kamasutra.com'}
        </p>
      </div>
    </div>
  );
};

export default ProfileInfo;
