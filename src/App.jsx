import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './componets/Header/Header';
import Music from './componets/Music/Music';
import News from './componets/News/News';
import Settings from './componets/Settings/Settings';
import ProfileConteiner from './componets/Profile/ProfileContainer';
import DialogsContainer from './componets/Dialogs/DialogsContainer';
import SideBarConainer from './componets/SideBar/SideBarContainer';
import FindFriendsContainer from './componets/FindFrieds/FindFriendsContainer';

const App = (props) => {
  return (
    <div className='body'>
      <div className='app-wrapper'>
        <BrowserRouter>
          <Header />
          <SideBarConainer store={props.store} />
          <main className='app-wrapper__main'>
            <Routes>
              <Route path='/' element={<ProfileConteiner />} />
              <Route path='/Profile' element={<ProfileConteiner />} />
              <Route path='/Dialogs' element={<DialogsContainer />} />
              <Route path='/News' element={<News />} />
              <Route path='/Music' element={<Music />} />
              <Route path='/FindFriends' element={<FindFriendsContainer />} />
              <Route path='/Settings' element={<Settings />} />
            </Routes>
          </main>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
