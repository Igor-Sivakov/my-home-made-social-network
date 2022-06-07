import Dialogs from './Dialogs';
import {
  sendNewMessageBodyActionCreator,
  updateMessageBodyActionCreator,
} from '../../redux/dialogsReducer';

const DialogsContainer = (props) => {
  let state = props.store.getState().dialogsPage;

  let sendMessage = () => {
    props.store.dispatch(sendNewMessageBodyActionCreator());
  };

  let onMessageChange = (messageBody) => {
    props.store.dispatch(updateMessageBodyActionCreator(messageBody));
  };

  return (
    <Dialogs
      state={state}
      sendNewMessageBodyActionCreator={sendMessage}
      updateMessageBodyActionCreator={onMessageChange}
    />
  );
};

export default DialogsContainer;
