import './ProfileData.css';
import ProfileStatus from '../ProfileStatus/ProfileStatus';

const ProfileData = ({
  aboutMe,
  lookingForAJob,
  fullName,
  profileExtra: { homePlace, education },
  setEditModForm,
  setEditMod,
  ...props
}) => {
  const toEditMod = (boolean) => {
    setEditMod(true);
    setEditModForm(boolean);
  };

  return (
    <div className='card__info__wrapper'>
      <h3
        className='card__info__userName__h3'
        onDoubleClick={() => {
          toEditMod(true);
        }}
      >
        {fullName != null ? fullName : 'Igor Sivakov'}
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
        {aboutMe != null ? aboutMe : 'I’ll come back and be stronger'}
      </p>
      <p
        className='card__info__p'
        onDoubleClick={() => {
          toEditMod(true);
        }}
      >
        Looking for a job:&ensp;
        {lookingForAJob != null ? lookingForAJob : '//it-kamasutra.com'}
      </p>
      <p
        className='card__info__p'
        onDoubleClick={() => {
          toEditMod(false);
        }}
      >
        Lives in:&ensp;{homePlace}
      </p>
      <p
        className='card__info__p'
        onDoubleClick={() => {
          toEditMod(false);
        }}
      >
        Education:&ensp;{education}
      </p>
    </div>
  );
};

export default ProfileData;
