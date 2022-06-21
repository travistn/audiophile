import { useNavigate } from 'react-router-dom';

import './ZX7Speaker.css';
import speaker from '../../../assets/home/desktop/image-speaker-zx7.jpg';

const ZX7Speaker = () => {
  const navigate = useNavigate();

  return (
    <div className='ZX7Speaker__wrapper'>
      <div className='ZX7Speaker__container'>
        <img src={speaker} alt='zx7-speaker' />
        <div className='ZX7Speaker-content'>
          <h4>ZX7 Speaker</h4>
          <button onClick={() => navigate('/product/zx7-speaker')}>See Product</button>
        </div>
      </div>
    </div>
  );
};

export default ZX7Speaker;
