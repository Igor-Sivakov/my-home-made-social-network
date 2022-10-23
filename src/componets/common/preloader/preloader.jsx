import doubleRing from '../../../img/doubleRing.svg';
import './preloader.css';

const Preloader = (props) => {
  return (
    <div className='prelaoder__container'>
      <img src={doubleRing} alt='fetching preloader img' />
    </div>
  );
};

export default Preloader;
