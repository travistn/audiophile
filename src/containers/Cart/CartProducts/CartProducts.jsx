import { HiMinus, HiPlus } from 'react-icons/hi';

import { editCart } from '../../../utils/CartActions';
import './CartProducts.css';

const CartProducts = ({ cart, setCart }) => {
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
            <h5>{product.name.split(' ')[0]}</h5>
            <p>{`$${product.price}`}</p>
          </div>
          <div className='cartProducts-quantity'>
            <HiMinus
              className='product__content-quantity-minus'
              onClick={() => editCart(product, 'subtract', setCart)}
            />
            <span>{product.quantity}</span>
            <HiPlus
              className='product__content-quantity-plus'
              onClick={() => editCart(product, 'add', setCart)}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartProducts;
