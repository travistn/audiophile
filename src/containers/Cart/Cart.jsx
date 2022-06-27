import React, { useEffect, useContext } from 'react';

import { AppContext } from '../../contexts/AppContext';
import { clearCart } from '../../utils/CartActions';
import CartProducts from './CartProducts/CartProducts';
import './Cart.css';

const Cart = () => {
  const { cart, setCart } = useContext(AppContext);

  console.log(cart);

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem('cart')));
  }, [setCart]);

  const totalPrice = cart.reduce(
    (prevPrice, current) => prevPrice + current.price * current.quantity,
    0
  );

  return (
    <div className='cart__container'>
      <div className='cart__header'>
        <h4>Cart ({cart?.length})</h4>
        <p onClick={() => clearCart(setCart)}>Remove All</p>
      </div>
      <CartProducts cart={cart} setCart={setCart} />
      <div className='cart-total'>
        <h3>Total</h3>
        <p>{`$${totalPrice}`}</p>
      </div>
      <button>Checkout</button>
    </div>
  );
};

export default Cart;