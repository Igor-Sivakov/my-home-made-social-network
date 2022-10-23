import ProfileInfo from './ProfileInfo/ProfileInfo';
import PostForm from './PostForm/PostForm';
import Post from './Post/Post';
import './Profile.css';
import Wallpaper from './Wallpaper/Wallpaper';

const Profile = ({
  postsData,
  router: {
    params: { userId },
  },
  authUserId,
  ...props
}) => {
  const isOwner = !userId;
  // eslint-disable-next-line eqeqeq
  const isOwnerById = userId == authUserId;
  let postElements = postsData.map((post) => (
    <Post state={post} key={post.id} />
  ));

  return (
    <div className='profile-content'>
      <div>
        <Wallpaper />
        <ProfileInfo
          profile={props.profile}
          profileExtra={props.profileExtra}
          photos={props.photos}
          fullName={props.fullName}
          aboutMe={props.aboutMe}
          lookingForAJob={props.lookingForAJob}
          status={props.status}
          updateUserStatus={props.updateUserStatus}
          isOwner={isOwner || isOwnerById}
          savePhoto={props.savePhoto}
          saveProfileUpdate={props.saveProfileUpdate}
          updateProfileExtraState={props.updateProfileExtraState}
        />
      </div>
      <PostForm addPost={props.addPost} />
      {postElements}
    </div>
  );
};

export default Profile;
