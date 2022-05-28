import './Post.css';

const Post = (props) => {
  return (
    <div>
      <div className='comments-inner'>
        <div className='commetns__avatar'>
          <img
            src='https://freelance.ru/img/portfolio/pics/00/36/88/3573970.jpg'
            alt='avatar'
          ></img>
        </div>
        <div className='comments__text'>{props.message}</div>
      </div>
      <div className='like-wrapper'>
        <span className='comments__like'>like {props.likeCounts}</span>
      </div>
    </div>
  );
};

export default Post;
