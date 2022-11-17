import { HiMinus, HiPlus } from 'react-icons/hi';
import { useSelector, useDispatch } from 'react-redux';

import './ProductDetails.css';
import { decrement, increment, resetQuantity, selectQuantity } from '../../redux/slices/quantity';
import { addToCart } from '../../redux/slices/cart';

const ProductDetails = ({ product, productImage }) => {
  let quantity = useSelector(selectQuantity);
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(addToCart({ ...product, quantity }));
    dispatch(resetQuantity());
  };

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
              onClick={() => dispatch(decrement())}
            />
            <span>{quantity}</span>
            <HiPlus
              className='product__content-quantity-plus'
              onClick={() => dispatch(increment())}
            />
          </div>
          <button onClick={addToCartHandler}>Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
