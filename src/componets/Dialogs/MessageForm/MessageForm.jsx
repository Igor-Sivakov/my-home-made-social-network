import './MessageForm.css';
import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { TextareaForMessages } from '../../common/formContrlos/formControls';
import { minMaxLengthCreator, norequired } from '../../utils/validators';

const MsgForm = ({ handleSubmit }) => {
  let maxLength = minMaxLengthCreator(0, 200);
  return (
    <form className='messageForm__inner' onSubmit={handleSubmit}>
      <Field
        className='messageForm__textArea'
        name='messageText'
        placeholder='enter your mail...'
        validate={[norequired, maxLength]}
        component={TextareaForMessages}
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
    props.sendNewMessageBody(values.messageText);
  };

  return (
    <div className='messageForm__wrapper'>
      <ReduxMessageForm onSubmit={addNewMessage} />
    </div>
  );
};

export default MessageForm;
