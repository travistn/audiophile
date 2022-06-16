import './ZX7Speaker.css';
import speaker from '../../../assets/home/desktop/image-speaker-zx7.jpg';

const ZX7Speaker = () => {
  return (
    <div className='ZX7Speaker__wrapper'>
      <div className='ZX7Speaker__container'>
        <img src={speaker} alt='zx7-speaker' />
        <div className='ZX7Speaker-content'>
          <h4>ZX7 Speaker</h4>
          <button>See Product</button>
        </div>
      </div>
    </div>
  );
};

export default ZX7Speaker;
