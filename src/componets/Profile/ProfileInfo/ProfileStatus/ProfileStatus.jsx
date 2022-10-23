import './ProfileStatus.css';
import React, { useState, useEffect } from 'react';

const ProfileStatus = ({ status, isOwner, updateUserStatus }) => {
  let [editMode, setEditMode] = useState(false);
  let [newStatus, setStatus] = useState(status);

  useEffect(() => {
    setStatus(status);
  }, [status]);

  let activateEditMode = () => {
    if (isOwner) setEditMode(true);
  };

  let deactivateEditMode = () => {
    setEditMode(false);
    updateUserStatus(newStatus);
  };

  let onStatusChange = (text) => {
    setStatus(text.currentTarget.value);
  };

  return (
    <div>
      <div>
        {!editMode && (
          <span
            onDoubleClick={() => {
              activateEditMode(isOwner);
            }}
          >
            {status || '----------------'}
          </span>
        )}
      </div>
      <div>
        {editMode && (
          <input
            onChange={onStatusChange}
            autoFocus={true}
            onBlur={deactivateEditMode}
            value={newStatus}
          ></input>
        )}
      </div>
    </div>
  );
};

export default ProfileStatus;
