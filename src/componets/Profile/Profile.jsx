import Card from './Card/Card';
import MyPost from './MyPost/MyPost';
import Post from './Posts/Post/Post';
import './Profile.css';
import Wallpaper from './Wallpaper/Wallpaper';

const Profile = () => {
  return (
    <div className='profile-content'>
      <div>
        <Wallpaper />
        <Card />
      </div>
      <MyPost />
      <Post message='Hey, how are you?' likeCounts='15' />
      <Post message="Yo, it's my fist post!" likeCounts='21' />
    </div>
  );
};

export default Profile;
