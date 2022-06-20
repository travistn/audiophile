import { useNavigate } from 'react-router-dom';

import './CategoryProductRight.css';

const CategoryProductRight = ({
  productImage,
  productName,
  description,
  category,
  slug,
  setSlug,
}) => {
  const navigate = useNavigate();

  const handleProductClick = () => {
    setSlug(slug);
    navigate(`/product/${slug}`);
  };

  return (
    <div className='categoryProductRight__wrapper'>
      <div className='categoryProductRight__container'>
        <div className='categoryProductRight__content'>
          <h3
            className={
              category === 'speakers'
                ? 'productCategory-speakers'
                : 'categoryProductRight__content-product-name'
            }>
            {productName}
          </h3>
          <p>{description}</p>
          <button value={productName} onClick={handleProductClick}>
            See product
          </button>
        </div>
        <img src={productImage} alt='product' />
      </div>
    </div>
  );
};

export default CategoryProductRight;
