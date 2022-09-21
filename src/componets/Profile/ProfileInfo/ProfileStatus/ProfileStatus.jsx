import './ProfileStatus.css';
import React from 'react';

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status,
  };
  activateEditMode = () => {
    this.setState({
      editMode: true,
    });
  };
  deactivateEditMode = () => {
    this.setState({
      editMode: false,
    });
    this.props.updateUserStatus(this.state.status);
  };

  onStatusChange = (text) => {
    this.setState({
      status: text.currentTarget.value,
    });
  };

  componentDidUpdate(pervProps) {
    if (pervProps.status !== this.props.status) {
      this.setState({
        status: this.props.status,
      });
    }
  }

  render() {
    return (
      <div>
        <div>
          {!this.state.editMode && (
            <span onDoubleClick={this.activateEditMode}>
              {this.props.status || '----------------'}
            </span>
          )}
        </div>
        <div>
          {this.state.editMode && (
            <input
              onChange={this.onStatusChange}
              autoFocus={true}
              onBlur={this.deactivateEditMode}
              value={this.state.status}
            ></input>
          )}
        </div>
      </div>
    );
  }
}

export default ProfileStatus;
