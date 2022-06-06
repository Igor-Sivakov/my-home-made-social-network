import './MessageForm.css';
import React from 'react';
import { sendNewMessageBodyActionCreator } from '../../../redux/dialogsReducer';
import { updateMessageBodyActionCreator } from '../../../redux/dialogsReducer';

const MessageForm = (props) => {
  let sendMessage = () => {
    props.dispatch(sendNewMessageBodyActionCreator());
  };

  let onMessageChange = (event) => {
    let messageBody = event.target.value;
    props.dispatch(updateMessageBodyActionCreator(messageBody));
  };

  return (
    <div className='conteiner__forStickyForm'>
      <div className='messageForm'>
        <div className='messageForm__inner'>
          <textarea
            className='messageForm__textArea'
            placeholder='enter your mail...'
            onChange={onMessageChange}
            value={props.newMessageBody}
          />
          <button onClick={sendMessage} className='messageForm__button'>
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default MessageForm;
