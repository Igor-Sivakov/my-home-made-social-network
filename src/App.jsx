import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Music from './componets/Music/Music';
import News from './componets/News/News';
import Settings from './componets/Settings/Settings';
import ProfileContainer from './componets/Profile/ProfileContainer';
import DialogsContainer from './componets/Dialogs/DialogsContainer';
import SideBarConainer from './componets/SideBar/SideBarContainer';
import UsersContainer from './componets/Users/UsersContainer';
import HeaderContainer from './componets/Header/HeaderContainer';
import Login from './componets/Login /Login';

const App = (props) => {
  return (
    <div className='body'>
      <div className='app-wrapper'>
        <BrowserRouter>
          <HeaderContainer />
          <SideBarConainer store={props.store} />
          <main className='app-wrapper__main'>
            <Routes>
              <Route path='/' element={<ProfileContainer />} />
              <Route path='/Profile' element={<ProfileContainer />} />
              <Route path='/Profile/:userId' element={<ProfileContainer />} />
              <Route path='/Dialogs' element={<DialogsContainer />} />
              <Route path='/News' element={<News />} />
              <Route path='/Music' element={<Music />} />
              <Route path='/FindFriends' element={<UsersContainer />} />
              <Route path='/Settings' element={<Settings />} />
              <Route path='/Login' element={<Login />} />
            </Routes>
          </main>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
