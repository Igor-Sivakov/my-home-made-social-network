import UserInfo from './UserInfo/UserInfo';
import PostForm from './PostForm/PostForm';
import Post from './Posts/Post/Post';
import './Profile.css';
import Wallpaper from './Wallpaper/Wallpaper';

const Profile = (props) => {
  let postElements = props.state.postsData.map((post) => <Post state={post} />);
  return (
    <div className='profile-content'>
      <div>
        <Wallpaper />
        <UserInfo />
      </div>
      <PostForm />
      {postElements}
    </div>
  );
};

export default Profile;
