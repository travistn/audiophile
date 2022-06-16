import HomeHeader from '../../components/HomeHeader/HomeHeader';
import ShopCategory from '../../components/ShopCategory/ShopCategory';
import ZX9Speaker from '../../components/HomeContent/ZX9Speaker/ZX9Speaker';
import ZX7Speaker from '../../components/HomeContent/ZX7Speaker/ZX7Speaker';
import YX1Earphones from '../../components/HomeContent/YX1Earphones/YX1Earphones';
import './Home.css';
import MissionStatement from '../../components/MissionStatement/MissionStatement';

const Home = () => {
  return (
    <div className='home__container'>
      <HomeHeader />
      <ShopCategory />
      <ZX9Speaker />
      <ZX7Speaker />
      <YX1Earphones />
      <MissionStatement />
    </div>
  );
};

export default Home;
