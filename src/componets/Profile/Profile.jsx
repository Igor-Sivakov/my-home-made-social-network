import ProfileInfo from './ProfileInfo/ProfileInfo';
import PostForm from './PostForm/PostForm';
import Post from './Post/Post';
import './Profile.css';
import Wallpaper from './Wallpaper/Wallpaper';

const Profile = (props) => {
  let postElements = props.postsData.map((post) => (
    <Post state={post} key={post.id} />
  ));

  return (
    <div className='profile-content'>
      <div>
        <Wallpaper />
        <ProfileInfo
          photos={props.photos}
          fullName={props.fullName}
          aboutMe={props.aboutMe}
          lookingForAJob={props.lookingForAJob}
          status={props.status}
          updateUserStatus={props.updateUserStatus}
        />
      </div>
      <PostForm addPost={props.addPost} />
      {postElements}
    </div>
  );
};

export default Profile;
