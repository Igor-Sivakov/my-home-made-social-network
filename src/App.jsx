import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import React from 'react';
import { connect } from 'react-redux';
import Music from './componets/Music/Music';
import News from './componets/News/News';
import Settings from './componets/Settings/Settings';
import ProfileContainer from './componets/Profile/ProfileContainer';
import SideBarConainer from './componets/SideBar/SideBarContainer';
import HeaderContainer from './componets/Header/HeaderContainer';
import { initializeApp, showGlobalError } from './redux/reducers/appReducer';
import Preloader from './componets/common/preloader/preloader';
import { compose } from 'redux';
import { getInitialized, getGlobalError } from './redux/selectors/appSelectors';
import GlobalErrorMessage from './componets/GlobalErrorMessage/GlobalErrorMessage';

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
  catchAllUnhandledErrors = (promiseRejectionEvent) => {
    this.props.showGlobalError(promiseRejectionEvent.reason.message);
  };
  componentDidMount() {
    this.props.initializeApp();
    // catch global error
    window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors);
  }

  componentWillUnmount() {
    window.removeEventListener(
      'unhandledrejection',
      this.catchAllUnhandledErrors
    );
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }
    return (
      <div className='body'>
        <div className='app-wrapper'>
          <HashRouter>
            <HeaderContainer />
            <SideBarConainer />
            <main className='app-wrapper__main'>
              {this.props.globalError && (
                <GlobalErrorMessage error={this.props.globalError} />
              )}
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
                  <Route path='*' element={<div>404 NOT FOUND</div>} />
                </Routes>
              </React.Suspense>
            </main>
          </HashRouter>
        </div>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    initialized: getInitialized(state),
    globalError: getGlobalError(state),
  };
};

export default compose(
  connect(mapStateToProps, {
    initializeApp,
    showGlobalError,
  })
)(App);
