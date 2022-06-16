import Navbar from '../Navbar/Navbar';
import HeaderContent from './HeaderContent/HeaderContent';
import './HomeHeader.css';
import headerImage from '../../assets/home/desktop/image-hero.jpg';

const HomeHeader = () => {
  return (
    <div className='homeHeader__wrapper'>
      <div className='homeHeader__container'>
        <img src={headerImage} alt='header' />
        <Navbar />
        <HeaderContent />
      </div>
    </div>
  );
};

export default HomeHeader;
