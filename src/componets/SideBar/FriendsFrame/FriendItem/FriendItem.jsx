import { NavLink } from 'react-router-dom';
import './FriendItem.css';
import userAvatar from './../../../../img/userAvatar.jpeg';

const FriendItem = (props) => {
  return (
    <NavLink
      to={'/Profile/' + props.state.id}
      className='friendItem__conteiner'
    >
      <img
        src={props.state.photos.small ? props.state.photos.small : userAvatar}
        className='friendItem__avatar'
        alt='avatar'
      />
      <p className='friendItem__name'>{props.state.name}</p>{' '}
    </NavLink>
  );
};

export default FriendItem;
