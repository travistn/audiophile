import { HiMinus, HiPlus } from 'react-icons/hi';
import { useSelector, useDispatch } from 'react-redux';

import './CartProducts.css';
import { shortProductName } from '../../../utils/ShortProductName';
import { selectCart, addItem, removeItem } from '../../../redux/slices/cart';

const CartProducts = () => {
  const cart = useSelector(selectCart);
  const dispatch = useDispatch();

  return (
    <div className='cartProducts__container'>
      {cart?.map((product) => (
        <div className='cartProducts' key={product.id}>
          <div className='cartProducts-image'>
            <img
              src={require(`../../../assets/cart/image-${product.slug}.jpg`)}
              alt='cart-product'
            />
          </div>
          <div className='cartProducts-details'>
            <h5>{shortProductName(product.name, product.id)}</h5>
            <p>{`$${product.price.toLocaleString()}`}</p>
          </div>
          <div className='cartProducts-quantity'>
            <HiMinus
              className='product__content-quantity-minus'
              onClick={() => dispatch(removeItem(product))}
            />
            <span>{product.quantity}</span>
            <HiPlus
              className='product__content-quantity-plus'
              onClick={() => dispatch(addItem(product))}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartProducts;
