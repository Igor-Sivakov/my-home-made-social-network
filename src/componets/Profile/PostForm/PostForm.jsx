import './PostForm.css';
import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { minMaxLengthCreator, norequired } from './../../utils/validators';
import { FormElementConstructor } from '../../common/formContrlos/formControls';

const PstForm = (props) => {
  let maxLength = minMaxLengthCreator(0, 300);
  let Textarea = FormElementConstructor('textarea');

  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        className='post__textArea'
        name='postText'
        placeholder='your news...'
        validate={[norequired, maxLength]}
        component={Textarea}
      />
      <button className='post__btn btn'>Send</button>
    </form>
  );
};

const ReduxPostForm = reduxForm({
  form: 'post',
})(PstForm);

const PostForm = (props) => {
  let addNewPost = (values) => {
    props.addPost(values.postText);
  };

  return (
    <div className='post-inner'>
      <div className='post-inner__wrapper'>
        <div className='post__h3'>Posts</div>
        <ReduxPostForm onSubmit={addNewPost} />
      </div>
    </div>
  );
};

export default PostForm;
