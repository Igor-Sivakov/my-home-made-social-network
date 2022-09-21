import './Post.css';

const Post = (props) => {
  return (
    <div>
      <div className='comments-inner'>
        <div className='commetns__avatar'>
          <img src={props.state.avatar} alt='avatar'></img>
        </div>
        <div className='comments__text'>{props.state.message}</div>
      </div>
      <div className='like-wrapper'>
        <span className='comments__like'>like {props.state.likeCounts}</span>
      </div>
    </div>
  );
};

export default Post;
