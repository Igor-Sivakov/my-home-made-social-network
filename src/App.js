import './App.css';
import Header from './componets/Header';
import Profile from './componets/Profile';
import SideBar from './componets/SideBar';

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
