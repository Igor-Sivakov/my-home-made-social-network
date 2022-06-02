import './PostForm.css';
import React from 'react';

const PostForm = (props) => {
  let newPostElelment = React.createRef();
  let addPost = () => {
    let text = newPostElelment.current.value;
    console.log(text);
  };

  return (
    <div className='post-inner'>
      <div className='post-inner__wrapper'>
        <div className='post__h3'>My post</div>
        <textarea
          ref={newPostElelment}
          className='post__textArea'
          placeholder='your news...'
        ></textarea>
        <button onClick={addPost} className='post__button'>
          Send
        </button>
      </div>
    </div>
  );
};

export default PostForm;
