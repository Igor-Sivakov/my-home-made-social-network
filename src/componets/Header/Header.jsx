import './Header.css';
import headerLogo from '../../img/headerLogo.png';
import reactLogo from '../../img/reactLogo.svg';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
  let onClickSignOutSignIn = () => {
    if (props.isAuth) return props.signOut();
    else return <NavLink to={'/Login'}></NavLink>;
  };

  return (
    <header className='header'>
      <div className='header-main'>
        <div className='header-main__logo'>
          <div className='header-main__logo__react'>
            <img src={reactLogo} alt='reactLogo' />
            <span>React</span>
          </div>

          <img src={headerLogo} alt='logo' />
        </div>
        <div className='header-main__auth__container'>
          {props.isAuth ? (
            <NavLink
              className='header-main__auth__link btn'
              to={'/Profile/' + props.authId}
            >
              {props.authLogin}
            </NavLink>
          ) : null}

          <button
            className='header-main__auth__btn btn'
            onClick={onClickSignOutSignIn}
          >
            {props.isAuth ? 'Sign out' : 'Sign in'}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
