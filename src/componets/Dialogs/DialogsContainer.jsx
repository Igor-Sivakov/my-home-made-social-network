import Dialogs from './Dialogs';
import {
  sendNewMessageBodyActionCreator,
  updateMessageBodyActionCreator,
} from '../../redux/dialogsReducer';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    sendNewMessageBody: () => {
      dispatch(sendNewMessageBodyActionCreator());
    },

    updateMessageBody: (messageBody) => {
      dispatch(updateMessageBodyActionCreator(messageBody));
    },
  };
};

let DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
