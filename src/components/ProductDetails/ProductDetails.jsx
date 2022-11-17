import { useContext } from 'react';
import { HiMinus, HiPlus } from 'react-icons/hi';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, selectQuantity } from '../../redux/slices/quantity';

import './ProductDetails.css';
import { addToCart } from '../../utils/CartActions';
import { AppContext } from '../../contexts/AppContext';

const ProductDetails = ({ product, productImage }) => {
  const quantity = useSelector(selectQuantity);
  const dispatch = useDispatch();

  const { setCart } = useContext(AppContext);

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
          <button onClick={() => addToCart(product, quantity, setCart)}>Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
