import HomeHeader from '../../components/HomeHeader/HomeHeader';
import ShopCategory from '../../components/ShopCategory/ShopCategory';
import ZX9Speaker from '../../components/HomeContent/ZX9Speaker/ZX9Speaker';
import './Home.css';

const Home = () => {
  return (
    <div className='home__container'>
      <HomeHeader />
      <ShopCategory />
      <ZX9Speaker />
    </div>
  );
};

export default Home;
