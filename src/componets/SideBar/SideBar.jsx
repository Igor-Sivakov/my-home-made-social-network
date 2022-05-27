import './SideBar.css';
import './SideBarActiveLink';

const SideBar = () => {
  return (
    <nav className='side-bar'>
      <div className='side-bar__wrapper'>
        <div className='side-bar__item'>
          <a href='/Profile' className='side-bar__item__link'>
            Profile
          </a>
        </div>
        <div className='side-bar__item'>
          <a href='/Dialogs' className='side-bar__item__link'>
            Messages
          </a>
        </div>
        <div className='side-bar__item'>
          <a href='/News' className='side-bar__item__link'>
            News
          </a>
        </div>
        <div className='side-bar__item'>
          <a href='#' className='side-bar__item__link'>
            Music
          </a>
        </div>
        <div className='side-bar__item'>
          <a src='#' className='side-bar__item__link'>
            Settings
          </a>
        </div>
      </div>
    </nav>
  );
};

export default SideBar;
