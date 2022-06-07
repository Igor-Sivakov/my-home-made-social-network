import './MessageForm.css';
import React from 'react';

const MessageForm = (props) => {
  let sendMessage = () => {
    props.sendNewMessageBodyActionCreator();
  };

  let onMessageChange = (event) => {
    let messageBody = event.target.value;
    props.updateMessageBodyActionCreator(messageBody);
  };

  return (
    <div className='conteiner__forStickyForm'>
      <div className='messageForm'>
        <div className='messageForm__inner'>
          <textarea
            className='messageForm__textArea'
            placeholder='enter your mail...'
            onChange={onMessageChange}
            value={props.state.newMessageBody}
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
