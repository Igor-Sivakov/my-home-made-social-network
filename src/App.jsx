import './App.css';
import Header from './componets/Header/Header';
import Profile from './componets/Profile/Profile';
import SideBar from './componets/SideBar/SideBar';

const App = () => {
  return (
    <div className='body'>
      <div className='wrapper'>
        <Header />
        <SideBar />
        <Profile />
      </div>
    </div>
  );
};

export default App;
