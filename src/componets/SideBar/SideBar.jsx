import { NavLink } from 'react-router-dom';
import FriendsFrame from './FriendsFrame/FriendsFrame';
import './SideBar.css';

const SideBar = (props) => {
  return (
    <div className='side-bar'>
      <nav className='side-bar__wrapper'>
        <div className='side-bar__item'>
          <NavLink to='/Profile' className='side-bar__item__link'>
            Profile
          </NavLink>
        </div>
        <div className='side-bar__item'>
          <NavLink to='/Dialogs' className='side-bar__item__link'>
            Messages
          </NavLink>
        </div>
        <div className='side-bar__item'>
          <NavLink to='/News' className='side-bar__item__link'>
            News
          </NavLink>
        </div>
        <div className='side-bar__item'>
          <NavLink to='/Music' className='side-bar__item__link'>
            Music
          </NavLink>
        </div>
        <div className='side-bar__item'>
          <NavLink to='/FindFriends' className='side-bar__item__link'>
            Find friends
          </NavLink>
        </div>
        <div className='side-bar__item'>
          <NavLink to='/Settings' className='side-bar__item__link'>
            Settings
          </NavLink>
        </div>
      </nav>
      <FriendsFrame
        peoples={props.peoples}
        isAuth={props.isAuth}
        getUserProfile={props.getUserProfile}
      />
    </div>
  );
};

export default SideBar;
