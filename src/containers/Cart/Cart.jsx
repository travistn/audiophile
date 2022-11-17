import Modal from '@mui/material/Modal';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import './Cart.css';
import CartProducts from './CartProducts/CartProducts';
import { getTotalPrice } from '../../utils/TotalPrice';
import { CartQuantity } from '../../utils/CartQuantity';
import { selectCart, clearCart } from '../../redux/slices/cart';

const Cart = ({ cartIsOpen, setCartIsOpen }) => {
  const cart = useSelector(selectCart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <Modal open={cartIsOpen} onClose={() => setCartIsOpen((prevState) => !prevState)}>
      <div className='cart__container'>
        <div className='cart__header'>
          <h4>Cart ({CartQuantity(cart)})</h4>
          <p onClick={() => dispatch(clearCart())}>Remove All</p>
        </div>
        <CartProducts />
        <div className='cart-total'>
          <h3>Total</h3>
          <p>{`$${(getTotalPrice(cart) > 0 ? getTotalPrice(cart) : 0).toLocaleString()}`}</p>
        </div>
        <button onClick={() => navigate('/checkout')}>Checkout</button>
      </div>
    </Modal>
  );
};

export default Cart;
