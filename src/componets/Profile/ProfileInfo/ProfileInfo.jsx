import './ProfileInfo.css';
import userInfoAvatar from './../../../img/userInfoAvatar.jpeg';
import Preloader from '../../common/preloader/preloader';
import ProfileData from './ProfileData/ProfileData';
import React, { useState } from 'react';
import ProfileDataForm from './ProfileDataForm/ProfileDataForm';

const ProfileInfo = ({ isOwner, fullName, savePhoto, photos, ...props }) => {
  const [addNewPhoto, setAddNewPhoto] = useState(false);
  const [editMod, setEditMod] = useState(false);
  const [editModForm, setEditModForm] = useState(true);

  if (!fullName) {
    return <Preloader />;
  }

  const addNewProfilePhotoBtnOn = () => {
    setAddNewPhoto(true);
  };

  const onMainPhotoSelected = (photo) => {
    if (photo.target.files.length) {
      savePhoto(photo.target.files[0]).then(setAddNewPhoto(false));
    }
  };

  return (
    <div className='card'>
      <div>
        <div className='card__avatar'>
          <img
            src={photos.large != null ? photos.large : userInfoAvatar}
            alt='avatar'
            onDoubleClick={addNewProfilePhotoBtnOn}
          />
        </div>
        {isOwner && addNewPhoto && (
          <label className='card__avatar__addNewPhotoBtn btn'>
            Upload foto
            <input type={'file'} onChange={onMainPhotoSelected} />
          </label>
        )}
      </div>
      <div className='card__data'>
        {editMod && isOwner ? (
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
            fullName={fullName}
            isOwner={isOwner}
            setEditModForm={setEditModForm}
            setEditMod={setEditMod}
          />
        )}
      </div>
    </div>
  );
};

export default ProfileInfo;
