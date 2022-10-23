import { NavLink } from 'react-router-dom';
import './DialogListItem.css';
import userAvatar from './../../../img/userAvatar.jpeg';

const DialogListItem = ({ state: { name, photos, id } }) => {
  let path = '/Dialogs/' + id;
  return (
    <li className='dialogList__item'>
      <div className='dialogList__item__boxForPoint'>
        <div className='dialogList__point'></div>
        <NavLink to={path} className='dialogList__item__conteiner'>
          <img
            src={photos.small ? photos.small : userAvatar}
            className='dialogList__avatar'
            alt='avatar'
          ></img>
          <p className='dialogList__name'>{name}</p>
        </NavLink>
      </div>
    </li>
  );
};

export default DialogListItem;
