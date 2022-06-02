import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Dialogs from './componets/Dialogs/Dialogs';
import Header from './componets/Header/Header';
import Music from './componets/Music/Music';
import News from './componets/News/News';
import Profile from './componets/Profile/Profile';
import SideBar from './componets/SideBar/SideBar';
import Settings from './componets/Settings/Settings';

const App = (props) => {
  return (
    <div className='body'>
      <div className='app-wrapper'>
        <BrowserRouter>
          <Header />
          <SideBar state={props.state.sideBar} />
          <main className='app-wrapper__main'>
            <Routes>
              <Route
                path='/'
                element={<Profile state={props.state.profilePage} />}
              />
              <Route
                path='/Profile'
                element={<Profile state={props.state.profilePage} />}
              />
              <Route
                path='/Dialogs'
                element={<Dialogs state={props.state.dialogsPage} />}
              />
              <Route path='/News' element={<News />} />
              <Route path='/Music' element={<Music />} />
              <Route path='/Settings' element={<Settings />} />
            </Routes>
          </main>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
