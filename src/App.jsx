import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Dialogs from './componets/Dialogs/Dialogs';
import Header from './componets/Header/Header';
import News from './componets/News/News';
import Profile from './componets/Profile/Profile';
import SideBar from './componets/SideBar/SideBar';

const App = () => {
  return (
    <div className='body'>
      <div className='app-wrapper'>
        <Header />
        <SideBar />
        <main className='app-wrapper__main'>
          <BrowserRouter>
            <Routes>
              <Route path='/Profile' element={<Profile />} />
              <Route path='/Dialogs' element={<Dialogs />} />
              <Route path='/News' element={<News />} />
            </Routes>
          </BrowserRouter>
        </main>
      </div>
    </div>
  );
};

export default App;
