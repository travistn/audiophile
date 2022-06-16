import HomeHeader from '../../components/HomeHeader/HomeHeader';
import ShopCategory from '../../components/ShopCategory/ShopCategory';
import './Home.css';

const Home = () => {
  return (
    <div className='home__container'>
      <HomeHeader />
      <ShopCategory />
    </div>
  );
};

export default Home;
