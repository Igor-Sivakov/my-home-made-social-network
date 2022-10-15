import './ProfileInfo.css';
import userInfoAvatar from './../../../img/userInfoAvatar.jpeg';
import Preloader from '../../common/preloader/preloader';
import ProfileStatus from './ProfileStatus/ProfileStatus';
import React, { useState } from 'react';

const ProfileInfo = (props) => {
  let [addNewPhoto, setAddNewPhoto] = useState(false);

  if (!props.fullName) {
    return <Preloader />;
  }

  const addNewProfilePhotoBtnOn = () => {
    setAddNewPhoto(true);
  };

  const onMainPhotoSelected = (photo) => {
    if (photo.target.files.length) {
      props.savePhoto(photo.target.files[0]).then(setAddNewPhoto(false));
    }
  };

  return (
    <div className='card'>
      <div>
        <div className='card__avatar'>
          <img
            src={
              props.photos.large != null ? props.photos.large : userInfoAvatar
            }
            alt='avatar'
            onDoubleClick={addNewProfilePhotoBtnOn}
          />
        </div>
        {props.isOwner && addNewPhoto && (
          <label className='card__avatar__addNewPhotoBtn btn'>
            Upload foto
            <input type={'file'} onChange={onMainPhotoSelected} />
          </label>
        )}
      </div>

      <div className='card__info__wrapper'>
        <h3 className='card__info__userName__h3'>
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
