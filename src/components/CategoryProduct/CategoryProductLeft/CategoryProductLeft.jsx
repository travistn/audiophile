import { useNavigate } from 'react-router-dom';

import './CategoryProductLeft.css';

const CategoryProductLeft = ({ productImage, productName, description, category, slug }) => {
  const navigate = useNavigate();

  const handleProductClick = () => {
    navigate(`/product/${slug}`);
  };

  return (
    <div className='categoryProductLeft__wrapper'>
      <div className='categoryProductLeft__container'>
        <img src={productImage} alt='product' />
        <div className='categoryProductLeft__content'>
          {productName === 'XX99 Mark II Headphones' ||
          'ZX9 Speaker' ||
          'YX1 Wireless Earphones' ? (
            <h5>New Product</h5>
          ) : (
            ''
          )}
          <h3
            className={
              category === 'speakers'
                ? 'productCategory-speakers'
                : 'categoryProductLeft__content-product-name'
            }>
            {productName}
          </h3>
          <p>{description}</p>
          <button value={productName} onClick={handleProductClick}>
            See product
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoryProductLeft;
