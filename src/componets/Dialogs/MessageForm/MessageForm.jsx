import './MessageForm.css';
import React from 'react';

const MessageForm = (props) => {
  let newMessageElement = React.createRef();

  let sendMessage = () => {
    props.addMessage();
  };

  let onMessageChange = () => {
    let messageText = newMessageElement.current.value;
    props.updateNewMessageText(messageText);
  };

  return (
    <div className='conteiner__forStickyForm'>
      <div className='messageForm'>
        <div className='messageForm__inner'>
          <textarea
            ref={newMessageElement}
            className='messageForm__textArea'
            placeholder='enter your mail...'
            onChange={onMessageChange}
            value={props.newMessageText}
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
