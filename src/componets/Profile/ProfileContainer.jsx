import Profile from './Profile';
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from '../../redux/profileReducer';

const ProfileConteiner = (props) => {
  let state = props.store.getState().profilePage;

  let addPost = () => {
    props.store.dispatch(addPostActionCreator());
  };

  let onPostChange = (text) => {
    props.store.dispatch(updateNewPostTextActionCreator(text));
  };

  return (
    <Profile
      state={state}
      addPostActionCreator={addPost}
      updateNewPostTextActionCreator={onPostChange}
    />
  );
};

export default ProfileConteiner;
