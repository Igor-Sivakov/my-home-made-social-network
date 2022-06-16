import Dialogs from './Dialogs';
import {
  sendNewMessageBodyAC,
  updateMessageBodyAC,
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
      dispatch(sendNewMessageBodyAC());
    },

    updateMessageBody: (messageBody) => {
      dispatch(updateMessageBodyAC(messageBody));
    },
  };
};

let DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
