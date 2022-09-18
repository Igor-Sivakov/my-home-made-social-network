import Dialogs from './Dialogs';
import {
  sendNewMessageBody,
  updateMessageBody,
} from '../../redux/dialogsReducer';
import { connect } from 'react-redux';
import { withAuthReNavigate } from '../HOC/withAuthReNavigate';
import { compose } from 'redux';

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};

export default compose(
  connect(mapStateToProps, {
    sendNewMessageBody,
    updateMessageBody,
  }),
  withAuthReNavigate
)(Dialogs);
