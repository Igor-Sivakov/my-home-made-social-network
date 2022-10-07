import './ProfileStatus.css';
import React, { useState, useEffect } from 'react';

const ProfileStatus = (props) => {
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  let activateEditMode = () => {
    setEditMode(true);
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
          <span onDoubleClick={activateEditMode}>
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
