import { useSelector } from 'react-redux';

import './CheckoutSummary.css';
import { shortProductName } from '../../../utils/ShortProductName';
import { getTotalPrice, getValueAddedTax } from '../../../utils/TotalPrice';
import { selectCart } from '../../../redux/slices/cart';

const CheckoutSummary = ({ setShowConfirmation, buyer }) => {
  const cart = useSelector(selectCart);

  const totalPrice = getTotalPrice(cart);
  const valueAddedTax = getValueAddedTax(totalPrice);
  const grandTotal = totalPrice + valueAddedTax + 50;

  const billingDetailsFilled = Object.values(buyer).every((value) => value !== '');

  return (
    <div className='checkoutSummary__container'>
      <h5>Summary</h5>
      {cart?.map((product) => (
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
        <p>{`$${grandTotal.toLocaleString()}`}</p>
      </div>
      <button
        className={`checkoutSummary-button ${
          !billingDetailsFilled ? 'checkoutSummary-buttonDisabled' : 'checkoutSummary-buttonActive'
        }`}
        onClick={() => setShowConfirmation((prev) => !prev)}
        disabled={!billingDetailsFilled}>
        Continue and pay
      </button>
    </div>
  );
};

export default CheckoutSummary;
