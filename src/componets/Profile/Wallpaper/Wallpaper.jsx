import './Wallpaper.css';
import wallpaper from '../../../img/mainWallpaper.jpeg';

const Wallpaper = () => {
  return (
    <div className='profile-content__inner__wallpaper'>
      <div className='profile-content__wallpaper'>
        <img src={wallpaper} alt='background_img' />
      </div>
    </div>
  );
};

export default Wallpaper;
