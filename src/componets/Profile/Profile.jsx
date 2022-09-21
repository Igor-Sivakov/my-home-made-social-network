import ProfileInfo from './ProfileInfo/ProfileInfo';
import PostForm from './PostForm/PostForm';
import Post from './Post/Post';
import './Profile.css';
import Wallpaper from './Wallpaper/Wallpaper';

const Profile = (props) => {
  let postElements = props.profilePage.postsData.map((post) => (
    <Post state={post} key={post.id} />
  ));

  return (
    <div className='profile-content'>
      <div>
        <Wallpaper />
        <ProfileInfo
          profile={props.profilePage.profile}
          status={props.profilePage.status}
          updateUserStatus={props.updateUserStatus}
        />
      </div>
      <PostForm state={props.profilePage} addPost={props.addPost} />
      {postElements}
    </div>
  );
};

export default Profile;
