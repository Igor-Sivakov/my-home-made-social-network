import UserInfo from './UserInfo/UserInfo';
import PostForm from './PostForm/PostForm';
import Post from './Posts/Post/Post';
import './Profile.css';
import Wallpaper from './Wallpaper/Wallpaper';

let postsData = [
  { id: 1, name: 'Dima', message: 'Hey,how are you?', likeCounts: 15 },
  { id: 2, name: 'Alina', message: "Yo, it's my fist post!", likeCounts: 21 },
  { id: 3, name: 'Ben', message: 'Yes I am!', likeCounts: 12 },
  { id: 4, name: 'Kim', message: 'Coco Loko! Alo Alo...', likeCounts: 36 },
];

const Profile = (props) => {
  let postElements = postsData.map((post) => (
    <Post message={post.message} likeCounts={post.likeCounts} />
  ));

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
