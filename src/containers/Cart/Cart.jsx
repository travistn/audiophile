import React, { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from '@mui/material/Modal';

import { AppContext } from '../../contexts/AppContext';
import { clearCart } from '../../utils/CartActions';
import CartProducts from './CartProducts/CartProducts';
import './Cart.css';

const Cart = ({ cartIsOpen, setCartIsOpen }) => {
  const { cart, setCart } = useContext(AppContext);
  const navigate = useNavigate();

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem('cart')));
  }, [setCart]);

  const totalPrice = cart?.reduce(
    (prevPrice, current) => prevPrice + current.price * current.quantity,
    0
  );

  return (
    <Modal open={cartIsOpen} onClose={() => setCartIsOpen((prevState) => !prevState)}>
      <div className='cart__container'>
        <div className='cart__header'>
          <h4>Cart ({cart?.length})</h4>
          <p onClick={() => clearCart(setCart)}>Remove All</p>
        </div>
        <CartProducts cart={cart} setCart={setCart} />
        <div className='cart-total'>
          <h3>Total</h3>
          <p>{`$${(totalPrice > 0 ? totalPrice : 0).toLocaleString()}`}</p>
        </div>
        <button onClick={() => navigate('/checkout')}>Checkout</button>
      </div>
    </Modal>
  );
};

export default Cart;
