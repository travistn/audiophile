import { useState } from 'react';
import { HiMinus, HiPlus } from 'react-icons/hi';

import './ProductDetails.css';
import { addToCart } from '../../utils/CartActions';

const ProductDetails = ({ product, productImage }) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className='productDetails__container'>
      <img src={productImage} alt='product' />
      <div className='product__content'>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <h5>{`$${product.price}`}</h5>
        <div className='product__content-cart'>
          <div className='product__content-quantity'>
            <HiMinus
              className='product__content-quantity-minus'
              onClick={() => setQuantity((prevQuantity) => prevQuantity - 1)}
            />
            <span>{quantity}</span>
            <HiPlus
              className='product__content-quantity-plus'
              onClick={() => setQuantity((prevQuantity) => prevQuantity + 1)}
            />
          </div>
          <button onClick={() => addToCart(product, quantity)}>Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
