import './ProfileStatus.css';
import React, { useState, useEffect } from 'react';

const ProfileStatus = (props) => {
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);
  let isOwner = props.isOwner;

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  let activateEditMode = () => {
    if (isOwner) setEditMode(true);
  };

  let deactivateEditMode = () => {
    setEditMode(false);
    props.updateUserStatus(status);
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
            {props.status || '----------------'}
          </span>
        )}
      </div>
      <div>
        {editMode && (
          <input
            onChange={onStatusChange}
            autoFocus={true}
            onBlur={deactivateEditMode}
            value={status}
          ></input>
        )}
      </div>
    </div>
  );
};

export default ProfileStatus;
