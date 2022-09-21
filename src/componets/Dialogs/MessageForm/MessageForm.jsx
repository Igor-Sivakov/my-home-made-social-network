import './MessageForm.css';
import React from 'react';
import { reduxForm, Field } from 'redux-form';

const MsgForm = (props) => {
  return (
    <form className='messageForm__inner' onSubmit={props.handleSubmit}>
      <Field
        className='messageForm__textArea'
        name='msgTextArea'
        placeholder='enter your mail...'
        component='textarea'
      />
      <button className='messageForm__btn btn'>Send</button>
    </form>
  );
};

const ReduxMessageForm = reduxForm({
  form: 'messageForm',
})(MsgForm);

const MessageForm = (props) => {
  let addNewMessage = (values) => {
    props.sendNewMessageBody(values.msgTextArea);
  };

  return (
    <div className='messageForm__wrapper'>
      <ReduxMessageForm onSubmit={addNewMessage} />
    </div>
  );
};

export default MessageForm;
