import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import React from 'react';
import { connect } from 'react-redux';
import Music from './componets/Music/Music';
import News from './componets/News/News';
import Settings from './componets/Settings/Settings';
import ProfileContainer from './componets/Profile/ProfileContainer';
import SideBarConainer from './componets/SideBar/SideBarContainer';
import HeaderContainer from './componets/Header/HeaderContainer';
import { initializeApp } from './redux/reducers/appReducer';
import Preloader from './componets/common/preloader/preloader';
import { compose } from 'redux';
import { getInitialized } from './redux/selectors/appSelectors';

const DialogsContainer = React.lazy(() =>
  import('./componets/Dialogs/DialogsContainer')
);
const UsersContainer = React.lazy(() =>
  import('./componets/Users/UsersContainer')
);
const LoginContainer = React.lazy(() =>
  import('./componets/Login/LoginContainer')
);

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }
    return (
      <div className='body'>
        <div className='app-wrapper'>
          <BrowserRouter>
            <HeaderContainer />
            <SideBarConainer />
            <main className='app-wrapper__main'>
              <React.Suspense
                fallback={
                  <div>
                    <Preloader />
                  </div>
                }
              >
                <Routes>
                  <Route path='/' element={<ProfileContainer />} />
                  <Route path='/Profile' element={<ProfileContainer />} />
                  <Route
                    path='/Profile/:userId'
                    element={<ProfileContainer />}
                  />
                  <Route path='/Dialogs' element={<DialogsContainer />} />
                  <Route path='/News' element={<News />} />
                  <Route path='/Music' element={<Music />} />
                  <Route path='/FindFriends' element={<UsersContainer />} />
                  <Route path='/Settings' element={<Settings />} />
                  <Route path='/Login' element={<LoginContainer />} />
                </Routes>
              </React.Suspense>
            </main>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    initialized: getInitialized(state),
  };
};

export default compose(
  connect(mapStateToProps, {
    initializeApp,
  })
)(App);
