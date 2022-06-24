import { HiMinus, HiPlus } from 'react-icons/hi';

import './CartProducts.css';

const CartProducts = ({ products }) => {
  console.log(products);

  return (
    <div className='cartProducts__container'>
      {products.map((product) => (
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
            <HiMinus className='product__content-quantity-minus' />
            <span>{product.quantity}</span>
            <HiPlus className='product__content-quantity-plus' />
          </div>
        </div>
      ))}
      <div className='cartProducts-total'>
        <h3>Total</h3>
        <p>$5000</p>
      </div>
      <button>Checkout</button>
    </div>
  );
};

export default CartProducts;
