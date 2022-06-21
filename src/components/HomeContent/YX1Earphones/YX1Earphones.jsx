import { useNavigate } from 'react-router-dom';

import './YX1Earphones.css';
import earphones from '../../../assets/home/desktop/image-earphones-yx1.jpg';

const YX1Earphones = () => {
  const navigate = useNavigate();

  return (
    <div className='YX1Earphones__wrapper'>
      <div className='YX1Earphones__container'>
        <img src={earphones} alt='yx1-earphones' />
        <div className='YX1Earphones-content__container'>
          <div className='YX1Earphones-content'>
            <h4>YX1 Earphones</h4>
            <button onClick={() => navigate('/product/yx1-earphones')}>See Product</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YX1Earphones;
