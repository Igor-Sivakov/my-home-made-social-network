import { NavLink } from 'react-router-dom';
import './DialogListItem.css';
import userAvatar from './../../../img/userAvatar.jpeg';

const DialogListItem = (props) => {
  let path = '/Dialogs/' + props.state.id;
  return (
    <li className='dialogList__item'>
      <div className='dialogList__item__boxForPoint'>
        <div className='dialogList__point'></div>
        <NavLink to={path} className='dialogList__item__conteiner'>
          <img
            src={
              props.state.photos.small ? props.state.photos.small : userAvatar
            }
            className='dialogList__avatar'
            alt='avatar'
          ></img>
          <p className='dialogList__name'>{props.state.name}</p>
        </NavLink>
      </div>
    </li>
  );
};

export default DialogListItem;
