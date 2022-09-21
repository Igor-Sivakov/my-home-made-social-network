import './PostForm.css';
import React from 'react';
import { reduxForm, Field } from 'redux-form';

const PstForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        className='post__textArea'
        name='postTextArea'
        placeholder='your news...'
        component='textarea'
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
    props.addPost(values.postTextArea);
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
