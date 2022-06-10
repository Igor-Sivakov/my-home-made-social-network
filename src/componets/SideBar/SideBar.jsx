import { NavLink } from 'react-router-dom';
import FriendsFrame from './FriendsFrame/FriendsFrame';
import './SideBar.css';

const SideBar = (props) => {
  return (
    <div className='side-bar'>
      <nav className='side-bar__wrapper'>
        <div className='side-bar__item'>
          <NavLink
            to='/Profile'
            className='side-bar__item__link side-bar__item__link_mod1'
          >
            Profile
          </NavLink>
        </div>
        <div className='side-bar__item'>
          <NavLink
            to='/Dialogs'
            className='side-bar__item__link side-bar__item__link_mod2'
          >
            Messages
          </NavLink>
        </div>
        <div className='side-bar__item'>
          <NavLink
            to='/News'
            className='side-bar__item__link side-bar__item__link_mod3'
          >
            News
          </NavLink>
        </div>
        <div className='side-bar__item'>
          <NavLink
            to='/Music'
            className='side-bar__item__link side-bar__item__link_mod4'
          >
            Music
          </NavLink>
        </div>
        <div className='side-bar__item'>
          <NavLink
            to='/FindFriends'
            className='side-bar__item__link side-bar__item__link_mod5'
          >
            Find friends
          </NavLink>
        </div>
        <div className='side-bar__item'>
          <NavLink
            to='/Settings'
            className='side-bar__item__link side-bar__item__link_mod6'
          >
            Settings
          </NavLink>
        </div>
      </nav>
      <FriendsFrame state={props.sideBar} />
    </div>
  );
};

export default SideBar;
