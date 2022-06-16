import './ZX9Speaker.css';
import speaker from '../../../assets/home/desktop/image-speaker-zx9.png';
import circles from '../../../assets/home/desktop/pattern-circles.svg';

const ZX9Speaker = () => {
  return (
    <div className='ZX9Speaker__wrapper'>
      <div className='ZX9Speaker__container'>
        <img src={speaker} alt='zx9-speaker' />
        <div className='ZX9Speaker-content'>
          <h3>ZX9 SPEAKER</h3>
          <p>
            Upgrade to premium speakers that are phenomenally built to deliver truly remarkable
            sound.
          </p>
          <button>SEE PRODUCT</button>
        </div>
        <div className='ZX9Speaker-circles'>
          <img src={circles} alt='circles-pattern' />
        </div>
      </div>
    </div>
  );
};

export default ZX9Speaker;
