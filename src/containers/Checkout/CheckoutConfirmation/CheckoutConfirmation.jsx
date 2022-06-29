import { useNavigate } from 'react-router-dom';
import { Modal } from '@mui/material';

import { shortProductName } from '../../../utils/ShortProductName';
import { getTotalPrice, getValueAddedTax } from '../../../utils/TotalPrice';
import './CheckoutConfirmation.css';
import confirmationIcon from '../../../assets/checkout/icon-order-confirmation.svg';

const CheckoutConfirmation = ({ showConfirmation, setShowConfirmation }) => {
  const checkoutCart = JSON.parse(localStorage.getItem('cart'));
  const navigate = useNavigate();

  const totalPrice = getTotalPrice(checkoutCart);
  const valueAddedTax = getValueAddedTax(totalPrice);
  const grandTotal = totalPrice + valueAddedTax + 50;

  const otherProductsMessage = () => {
    const cart = checkoutCart.length;
    if (cart > 1) {
      return `and ${cart - 1} other items(s)`;
    } else if (cart === 1) {
      return '';
    }
  };
  return (
    <Modal open={showConfirmation} onClose={() => setShowConfirmation((prevState) => !prevState)}>
      <div className='checkoutConfirmation'>
        <div className='checkoutConfirmation-image'>
          <img src={confirmationIcon} alt='confirmation-icon' />
        </div>
        <h2>Thank you for your order</h2>
        <p className='confirmation-message'>You will receive an email conformation shortly.</p>
        <div className='checkoutConfirmation__summary'>
          <div className='checkoutConfirmation-cart'>
            <div className='checkoutConfirmation-cart-content'>
              <div className='checkoutConfirmation-products'>
                <img
                  src={require(`../../../assets/cart/image-${checkoutCart[0].slug}.jpg`)}
                  alt='product-thumbnail'
                />
                <div className='confirmation-products-details'>
                  <h3>{shortProductName(checkoutCart[0].name, checkoutCart[0].id)}</h3>
                  <p>{`$${checkoutCart[0].price.toLocaleString()}`}</p>
                </div>
                <p>{`x${checkoutCart[0].quantity}`}</p>
              </div>
              <h5>{otherProductsMessage()}</h5>
            </div>
          </div>
          <div className='checkoutConfirmation-total'>
            <h5>Grand Total</h5>
            <p>{`$${grandTotal.toLocaleString()}`}</p>
          </div>
        </div>
        <button onClick={() => navigate('/')}>Back to home</button>
      </div>
    </Modal>
  );
};

export default CheckoutConfirmation;
