import { NavLink } from 'react-router-dom';
import './SideBar.css';

const SideBar = () => {
  return (
    <nav className='side-bar'>
      <div className='side-bar__wrapper'>
        <div className='side-bar__item'>
          <NavLink to='/Profile' className='side-bar__item__link mod1'>
            Profile
          </NavLink>
        </div>
        <div className='side-bar__item'>
          <NavLink to='/Dialogs' className='side-bar__item__link mod2'>
            Messages
          </NavLink>
        </div>
        <div className='side-bar__item'>
          <NavLink to='/News' className='side-bar__item__link mod3'>
            News
          </NavLink>
        </div>
        <div className='side-bar__item'>
          <NavLink to='/Music' className='side-bar__item__link mod4'>
            Music
          </NavLink>
        </div>
        <div className='side-bar__item'>
          <NavLink to='/Settings' className='side-bar__item__link mod5'>
            Settings
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default SideBar;
