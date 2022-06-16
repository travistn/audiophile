import './YX1Earphones.css';
import earphones from '../../../assets/home/desktop/image-earphones-yx1.jpg';

const YX1Earphones = () => {
  return (
    <div className='YX1Earphones__wrapper'>
      <div className='YX1Earphones__container'>
        <img src={earphones} alt='yx1-earphones' />
        <div className='YX1Earphones-content__container'>
          <div className='YX1Earphones-content'>
            <h4>YX1 Earphones</h4>
            <button>See Product</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YX1Earphones;
