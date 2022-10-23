import DialogListItem from './DialogListItem/DialogListItem';
import Messages from './Messages/Messages';
import './Dialogs.css';
import InvertMessage from './Messages/InvertMessage/InvertMessage';
import MessageForm from './MessageForm/MessageForm';

const Dialogs = ({ messagesData, dialogsData, ...props }) => {
  let dialogElements = dialogsData.map((dialog) => (
    <DialogListItem state={dialog} key={dialog.id} />
  ));
  // user id emulator
  let messageElements = messagesData.map((mail) => {
    let j = [2, 5, 7, 3, 9, 11, 13, 15, 17];
    for (let i = 0; i < j.length; i++) {
      if (j[i] === mail.id) {
        return <InvertMessage state={mail} key={mail.id} />;
      }
    }
    return <Messages state={mail} key={mail.id} />;
  });

  return (
    <div className='dialogs'>
      <h2 className='main-page__h2'>DIALOGS</h2>
      <div className='dialogs-wrapper'>
        <div className='usersList-conteiner'>
          <div className='usersList__inner'>
            <ul>{dialogElements}</ul>
          </div>
        </div>
        <div className='messages-conteiner'>
          <MessageForm sendNewMessageBody={props.sendNewMessageBody} />
          <div className='messages-conteiner__small'>{messageElements}</div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
