import './MyPost.css';

const MyPost = () => {
  return (
    <div className='post-inner'>
            <div className='post-inner__wrapper'>
              <div className='post__h3'>My post</div>
              <textarea
                className='text-area'
                placeholder='your news...'
              ></textarea>
              <button className='button'>Send</button>
            </div>
          </div>
  );
}

export default MyPost;