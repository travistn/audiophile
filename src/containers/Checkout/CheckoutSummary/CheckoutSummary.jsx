import { shortProductName } from '../../../utils/ShortProductName';
import './CheckoutSummary.css';

const CheckoutSummary = ({ setShowConfirmation }) => {
  const checkoutCart = JSON.parse(localStorage.getItem('cart'));

  const totalPrice = checkoutCart?.reduce(
    (prevPrice, current) => prevPrice + current.price * current.quantity,
    0
  );

  const valueAddedTax = Math.round(totalPrice * 0.2);

  return (
    <div className='checkoutSummary__container'>
      <h5>Summary</h5>
      {checkoutCart?.map((product) => (
        <div className='checkoutSummary__products' key={product.id}>
          <div className='checkoutSummary-image'>
            <img
              src={require(`../../../assets/cart/image-${product.slug}.jpg`)}
              alt='summary-product'
            />
          </div>
          <div className='checkoutSummary-details'>
            <h5>{shortProductName(product.name, product.id)}</h5>
            <p>{`$${product.price.toLocaleString()}`}</p>
          </div>
          <div className='checkoutSummary-quantity'>
            <p>{`x ${product.quantity}`}</p>
          </div>
        </div>
      ))}
      <div className='checkoutSummary-total'>
        <h3>Total</h3>
        <p>{`$${(totalPrice > 0 ? totalPrice : 0).toLocaleString()}`}</p>
      </div>
      <div className='checkoutSummary-shipping'>
        <h3>Shipping</h3>
        <p>$50</p>
      </div>
      <div className='checkoutSummary-vat'>
        <h3>VAT (Included)</h3>
        <p>{`$${valueAddedTax.toLocaleString()}`}</p>
      </div>
      <div className='checkoutSummary-grandTotal'>
        <h3>Grand Total</h3>
        <p>{`$${(totalPrice + valueAddedTax + 50).toLocaleString()}`}</p>
      </div>
      <button onClick={() => setShowConfirmation((prev) => !prev)}>Continue and pay</button>
    </div>
  );
};

export default CheckoutSummary;
