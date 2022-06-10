import './Header.css';
import headerLogo from '../../img/headerLogo.png';

const Header = () => {
  return (
    <header className='header'>
      <div className='header-main'>
        <div className='header-main__logo'>
          <img src={headerLogo} alt='logo' />
        </div>
      </div>
    </header>
  );
};

export default Header;
