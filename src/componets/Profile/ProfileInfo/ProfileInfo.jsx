import './ProfileInfo.css';
import userInfoAvatar from './../../../img/userInfoAvatar.jpeg';
import Preloader from '../../common/preloader/preloader';
import ProfileData from './ProfileData/ProfileData';
import React, { useState } from 'react';
import ProfileDataForm from './ProfileDataForm/ProfileDataForm';

const ProfileInfo = (props) => {
  const [addNewPhoto, setAddNewPhoto] = useState(false);
  const [editMod, setEditMod] = useState(false);
  const [editModForm, setEditModForm] = useState(true);

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
      <div className='card__data'>
        {editMod && props.isOwner ? (
          <ProfileDataForm
            {...props}
            setEditMod={setEditMod}
            editModForm={editModForm}
            saveProfileUpdate={props.saveProfileUpdate}
            updateProfileExtraState={props.updateProfileExtraState}
          />
        ) : (
          <ProfileData
            {...props}
            setEditModForm={setEditModForm}
            setEditMod={setEditMod}
          />
        )}
      </div>
    </div>
  );
};

export default ProfileInfo;
