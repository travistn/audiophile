import { Link } from 'react-router-dom';

import './ShopCategory.css';
import headphones from '../../assets/shared/desktop/image-category-thumbnail-headphones.png';
import speakers from '../../assets/shared/desktop/image-category-thumbnail-speakers.png';
import earphones from '../../assets/shared/desktop/image-category-thumbnail-earphones.png';
import arrowRight from '../../assets/shared/desktop/icon-arrow-right.svg';

const categories = [
  { name: 'headphones', src: headphones },
  { name: 'speakers', src: speakers },
  { name: 'earphones', src: earphones },
];

const ShopCategory = () => {
  const renderProductImage = (index) => {
    if (index === 0) {
      return 'shopCategory-headphones-image';
    } else if (index === 1) {
      return 'shopCategory-speakers-image';
    } else {
      return 'shopCategory-earphones-image';
    }
  };

  return (
    <div className='shopCategory__wrapper'>
      <div className='shopCategory__container'>
        {categories.map((category, index) => (
          <div className='shopCategory-product' key={category.name}>
            <img
              src={category.src}
              alt={`${category.name}-thumbnail`}
              className={renderProductImage(index)}
            />
            <div className='shopCategory-product-content'>
              <h5>{category.name}</h5>
              <div className='shopCategory-product-text'>
                <Link to={`/${category.name}`} className='shopCategory-link'>
                  Shop
                </Link>
                <img src={arrowRight} alt='right-arrow' className='shopCategory-arrowRight' />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopCategory;
