import './Header.css';
import headerLogo from '../../img/headerLogo.png';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
  let onClickSignOutSignIn = () => {
    if (props.auth.isAuth) return props.signOut();
    else return <NavLink to={'/Login'}></NavLink>;
  };

  return (
    <header className='header'>
      <div className='header-main'>
        <div className='header-main__logo'>
          <img src={headerLogo} alt='logo' />
        </div>
        <div className='header-main__auth__container'>
          {props.auth.isAuth ? (
            <NavLink
              className='header-main__auth__link btn'
              to={'/Profile/' + props.auth.id}
            >
              {props.auth.login}
            </NavLink>
          ) : null}

          <button
            className='header-main__auth__btn btn'
            onClick={onClickSignOutSignIn}
          >
            {props.auth.isAuth ? 'Sign out' : 'Sign in'}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
