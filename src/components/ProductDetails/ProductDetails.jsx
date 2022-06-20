import { HiMinus, HiPlus } from 'react-icons/hi';

import './ProductDetails.css';

const ProductDetails = ({ productImage, productName, description, price }) => {
  return (
    <div className='productDetails__container'>
      <img src={productImage} alt='product' />
      <div className='product__content'>
        <h3>{productName}</h3>
        <p>{description}</p>
        <h5>{price}</h5>
        <div className='product__content-cart'>
          <div className='product__content-quantity'>
            <HiMinus className='product__content-quantity-minus' />
            <span>1</span>
            <HiPlus className='product__content-quantity-plus' />
          </div>
          <button>Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
