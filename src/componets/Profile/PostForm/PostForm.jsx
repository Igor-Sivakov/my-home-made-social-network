import './PostForm.css';
import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { minMaxLengthCreator, norequired } from './../../utils/validators';
import { FormElementConstructorTextarea } from '../../common/formContrlos/formControls';

const PstForm = ({ handleSubmit }) => {
  const maxLength = minMaxLengthCreator(0, 300);

  return (
    <form onSubmit={handleSubmit}>
      <Field
        name='postText'
        placeholder='What`s on your mind, today?'
        validate={[norequired, maxLength]}
        component={FormElementConstructorTextarea}
        className='post__textarea'
      />
      <button className='post__btn btn'>Send</button>
    </form>
  );
};

const ReduxPostForm = reduxForm({
  form: 'post',
})(PstForm);

const PostForm = React.memo((props) => {
  let addNewPost = (values) => {
    props.addPost(values.postText);
  };

  return (
    <div className='post-inner'>
      <div className='post-inner__wrapper'>
        <div className='post__h3'>Add new post</div>
        <ReduxPostForm onSubmit={addNewPost} />
      </div>
    </div>
  );
});

export default PostForm;
