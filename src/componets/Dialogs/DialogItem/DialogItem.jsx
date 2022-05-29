import { NavLink } from 'react-router-dom';
import './DialogItem.css';

const DialogItem = (props) => {
  let path = '/Dialogs/' + props.id;
  return (
    <li className='users__inner__item'>
      <NavLink to={path} className='users__inner__link'>
        {props.name}
      </NavLink>
    </li>
  );
};

export default DialogItem;
