import Dialogs from './Dialogs';
import React from 'react';
import {
  sendNewMessageBody,
  getFriendsForDialogs,
} from '../../redux/dialogsReducer';
import { connect } from 'react-redux';
import { withAuthReNavigate } from '../HOC/withAuthReNavigate';
import { compose } from 'redux';

class DialogsContainer extends React.Component {
  componentDidMount() {
    this.props.getFriendsForDialogs();
  }

  render() {
    return (
      <>
        <Dialogs
          {...this.props}
          sendNewMessageBody={this.props.sendNewMessageBody}
        />
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};

export default compose(
  connect(mapStateToProps, {
    sendNewMessageBody,
    getFriendsForDialogs,
  }),
  withAuthReNavigate
)(DialogsContainer);
