import './ProfileData.css';
import ProfileStatus from '../ProfileStatus/ProfileStatus';

const ProfileData = (props) => {
  const toEditMod = (boolean) => {
    props.setEditMod(true);
    props.setEditModForm(boolean);
  };

  return (
    <div className='card__info__wrapper'>
      <h3
        className='card__info__userName__h3'
        onDoubleClick={() => {
          toEditMod(true);
        }}
      >
        {props.fullName != null ? props.fullName : 'Igor Sivakov'}
      </h3>
      <ProfileStatus
        isOwner={props.isOwner}
        status={props.status}
        updateUserStatus={props.updateUserStatus}
      />
      <p
        className='card__info__p card__info__p_mod-marg'
        onDoubleClick={() => {
          toEditMod(true);
        }}
      >
        About me:&ensp;
        {props.aboutMe != null
          ? props.aboutMe
          : 'I’ll come back and be stronger'}
      </p>
      <p
        className='card__info__p'
        onDoubleClick={() => {
          toEditMod(true);
        }}
      >
        Looking for a job:&ensp;
        {props.lookingForAJob != null
          ? props.lookingForAJob
          : '//it-kamasutra.com'}
      </p>
      <p
        className='card__info__p'
        onDoubleClick={() => {
          toEditMod(false);
        }}
      >
        Lives in:&ensp;{props.profileExtra.homePlace}
      </p>
      <p
        className='card__info__p'
        onDoubleClick={() => {
          toEditMod(false);
        }}
      >
        Education:&ensp;{props.profileExtra.education}
      </p>
    </div>
  );
};

export default ProfileData;
