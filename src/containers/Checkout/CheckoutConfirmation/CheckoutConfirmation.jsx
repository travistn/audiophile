import { useNavigate } from 'react-router-dom';
import { Modal } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';

import './CheckoutConfirmation.css';
import confirmationIcon from '../../../assets/checkout/icon-order-confirmation.svg';
import { shortProductName } from '../../../utils/ShortProductName';
import { getTotalPrice, getValueAddedTax } from '../../../utils/TotalPrice';
import { selectCart, clearCart } from '../../../redux/slices/cart';

const CheckoutConfirmation = ({ showConfirmation, setShowConfirmation }) => {
  const cart = useSelector(selectCart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const totalPrice = getTotalPrice(cart);
  const valueAddedTax = getValueAddedTax(totalPrice);
  const grandTotal = totalPrice + valueAddedTax + 50;

  const otherProductsMessage = () => {
    const cartQuantity = cart.length;
    if (cartQuantity > 1) {
      return `and ${cartQuantity - 1} other items(s)`;
    } else if (cartQuantity === 1) {
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
                  src={require(`../../../assets/cart/image-${cart[0].slug}.jpg`)}
                  alt='product-thumbnail'
                />
                <div className='confirmation-products-details'>
                  <h3>{shortProductName(cart[0].name, cart[0].id)}</h3>
                  <p>{`$${cart[0].price.toLocaleString()}`}</p>
                </div>
                <p>{`x${cart[0].quantity}`}</p>
              </div>
              <h5>{otherProductsMessage()}</h5>
            </div>
          </div>
          <div className='checkoutConfirmation-total'>
            <h5>Grand Total</h5>
            <p>{`$${grandTotal.toLocaleString()}`}</p>
          </div>
        </div>
        <button
          onClick={() => {
            navigate('/');
            dispatch(clearCart());
          }}>
          Back to home
        </button>
      </div>
    </Modal>
  );
};

export default CheckoutConfirmation;
