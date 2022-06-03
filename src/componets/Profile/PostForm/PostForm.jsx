import './PostForm.css';
import React from 'react';

const PostForm = (props) => {
  let newPostElelment = React.createRef();
  let addPost = () => {
    props.addPost();
  };

  let onPostChange = () => {
    let text = newPostElelment.current.value;
    props.updateNewPostText(text);
  };
  return (
    <div className='post-inner'>
      <div className='post-inner__wrapper'>
        <div className='post__h3'>My post</div>
        <textarea
          ref={newPostElelment}
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
