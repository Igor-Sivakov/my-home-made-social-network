import Card from './Card/Card';
import MyPost from './MyPost/MyPost';
import Post from './Posts/Post/Post';
import './Profile.css';
import Wallpaper from './Wallpaper/Wallpaper';

const Profile = () => {
  return (
    <main className='profile-content'>
          <div> {/* wrapper */}
            <Wallpaper  />
            <Card  />
          </div>
          <MyPost  />
          <Post  />
          <Post  />
          <Post  />
          <Post  />
          <Post  />
        </main>
  );
}

export default Profile;