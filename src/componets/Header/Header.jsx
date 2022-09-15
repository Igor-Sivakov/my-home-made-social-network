import './Header.css';
import headerLogo from '../../img/headerLogo.png';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
  return (
    <header className='header'>
      <div className='header-main'>
        <div className='header-main__logo'>
          <img src={headerLogo} alt='logo' />
        </div>
        <div className='header-main__auth'>
          <NavLink to={'/'}>{props.isAuth ? props.login : 'Log in'}</NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
