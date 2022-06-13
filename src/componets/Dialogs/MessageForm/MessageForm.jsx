import './MessageForm.css';
import React from 'react';

const MessageForm = (props) => {
  let sendMessage = () => {
    props.sendNewMessageBody();
  };

  let onMessageChange = (event) => {
    let messageBody = event.target.value;
    props.updateMessageBody(messageBody);
  };

  return (
    <div className='conteiner__forStickyForm'>
      <div className='messageForm__wrapper'>
        <div className='messageForm__inner'>
          <textarea
            className='messageForm__textArea'
            placeholder='enter your mail...'
            onChange={onMessageChange}
            value={props.state.newMessageBody}
          />
          <button onClick={sendMessage} className='messageForm__btn btn'>
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default MessageForm;
