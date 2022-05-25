import './SideBar.css';

const SideBar = () => {
  return (
    <nav className='side-bar'>
          <div className='side-bar__nav'>
            <div className="side-bar__nav__item">
              <a src='#'>Profile</a>
            </div>
            <div className="side-bar__nav__item">
              <a src='#'>Messages</a>
            </div>
            <div className="side-bar__nav__item">
              <a src='#'>News</a>
            </div>
            <div className="side-bar__nav__item">
              <a src='#'>Music</a>
            </div>
            <div className="side-bar__nav__item">
              <a src='#'>Settings</a>
            </div>
          </div>
        </nav>
  );
}

export default SideBar;