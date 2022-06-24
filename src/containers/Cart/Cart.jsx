import { useState, useEffect } from 'react';

import CartProducts from './CartProducts/CartProducts';
import './Cart.css';

const Cart = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(JSON.parse(localStorage.getItem('cart')));
  }, []);

  return (
    <div className='cart__container'>
      <div className='cart__header'>
        <h4>Cart ({products.length})</h4>
        <p>Remove All</p>
      </div>
      <CartProducts products={products} />
    </div>
  );
};

export default Cart;
