import './PostForm.css';
import React from 'react';
import { addPostActionCreator } from '../../../redux/profileReducer';
import { updateNewPostTextActionCreator } from '../../../redux/profileReducer';

const PostForm = (props) => {
  let addPost = () => {
    props.dispatch(addPostActionCreator());
  };

  let onPostChange = (event) => {
    let text = event.target.value;
    props.dispatch(updateNewPostTextActionCreator(text));
  };
  return (
    <div className='post-inner'>
      <div className='post-inner__wrapper'>
        <div className='post__h3'>My post</div>
        <textarea
          onChange={onPostChange}
          className='post__textArea'
          placeholder='your news...'
          value={props.newPostText}
        />
        <button onClick={addPost} className='post__button'>
          Send
        </button>
      </div>
    </div>
  );
};

export default PostForm;
