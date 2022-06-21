import { useNavigate } from 'react-router-dom';

import './HeaderContent.css';

const HeaderContent = () => {
  const navigate = useNavigate();

  return (
    <div className='headerContent__container'>
      <div className='headerContent'>
        <h5>NEW PRODUCT</h5>
        <h2>XX99 Mark II Headphones</h2>
        <p>
          Experience natural, lifelike audio and exceptional build quality made for the passionate
          music enthusiast.
        </p>
        <button onClick={() => navigate('/product/xx99-mark-two-headphones')}>SEE PRODUCT</button>
      </div>
    </div>
  );
};

export default HeaderContent;
