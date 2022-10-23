import { NavLink } from 'react-router-dom';
import './FriendItem.css';
import userAvatar from './../../../../img/userAvatar.jpeg';

const FriendItem = ({ getUserProfile, state: { id, photos, name } }) => {
  return (
    <NavLink
      to={'/Profile/' + id}
      className='friendItem__conteiner'
      onClick={() => {
        getUserProfile(id);
      }}
    >
      <img
        src={photos.small ? photos.small : userAvatar}
        className='friendItem__avatar'
        alt='avatar'
      />
      <p className='friendItem__name'>{name}</p>{' '}
    </NavLink>
  );
};

export default FriendItem;
