import { NavLink } from 'react-router-dom';
import './FriendItem.css';

const FriendItem = (props) => {
  return (
    <NavLink to='#' className='friendItem__conteiner'>
      <img
        src={props.state.avatar}
        className='friendItem__avatar'
        alt='avatar'
      />
      <p className='friendItem__name'>{props.state.name}</p>
    </NavLink>
  );
};

export default FriendItem;
