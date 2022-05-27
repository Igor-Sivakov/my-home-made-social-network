import './Post.css';

const Post = (props) => {
  return (
    <div>
      <div className='comments-inner'>
        <div className='commetns__avatar'></div>
        <div className='comments__text'>{props.message}</div>
      </div>
      <div>
        <span>like {props.likeCounts}</span>
      </div>
    </div>
  );
};

export default Post;
