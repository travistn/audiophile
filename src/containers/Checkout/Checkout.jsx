import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import CheckoutSummary from './CheckoutSummary/CheckoutSummary';
import cashDeliveryIcon from '../../assets/checkout/icon-cash-on-delivery.svg';

import './Checkout.css';

const Checkout = () => {
  const [buyer, setBuyer] = useState({
    name: '',
    email: '',
    number: '',
    address: '',
    zip: '',
    city: '',
    country: '',
    eMoneyNum: '',
    eMoneyPin: '',
  });
  const [paymentType, setPaymentType] = useState('eMoney');
  const navigate = useNavigate();

  const handleFormChange = (e) => {
    setBuyer({ ...buyer, [e.currentTarget.id]: e.target.value });
  };

  const handlePaymentType = (e) => {
    setPaymentType(e.target.value);
  };

  return (
    <>
      <div className='checkout-navbar'>
        <Navbar />
      </div>
      <div className='checkout__wrapper'>
        <h4 className='checkout-goBack' onClick={() => navigate(-1)}>
          Go Back
        </h4>
        <div className='checkout__container'>
          <div className='checkout__details'>
            <h2>Checkout</h2>
            <form className='checkout'>
              <h5>Billing Details</h5>
              <div className='checkout-sections'>
                <label>
                  Name
                  <input
                    type='text'
                    placeholder='Alexei Ward'
                    id='name'
                    value={buyer.name}
                    onChange={handleFormChange}
                  />
                </label>
                <label>
                  Email
                  <input
                    type='email'
                    placeholder='alexei@mail.com'
                    id='email'
                    value={buyer.email}
                    onChange={handleFormChange}
                  />
                </label>
                <label>
                  Phone Number
                  <input
                    type='text'
                    placeholder='+1 202-555-0136'
                    id='number'
                    value={buyer.number}
                    onChange={handleFormChange}
                  />
                </label>
              </div>
              <h5>Shipping Info</h5>
              <div className='checkout-sections'>
                <label className='checkout-address'>
                  Address
                  <input
                    type='text'
                    placeholder='1137 Williams Avenue'
                    id='address'
                    value={buyer.address}
                    onChange={handleFormChange}
                  />
                </label>
                <label>
                  ZIP Code
                  <input
                    type='text'
                    placeholder='10001'
                    id='zip'
                    value={buyer.zip}
                    onChange={handleFormChange}
                  />
                </label>
                <label>
                  City
                  <input
                    type='text'
                    placeholder='New York'
                    id='city'
                    value={buyer.city}
                    onChange={handleFormChange}
                  />
                </label>
                <label>
                  Country
                  <input
                    type='text'
                    placeholder='United States'
                    id='country'
                    value={buyer.country}
                    onChange={handleFormChange}
                  />
                </label>
              </div>
              <h5>Payment Details</h5>
              <div className='checkout-sections'>
                <label>
                  Payment Method
                  <select onChange={handlePaymentType}>
                    <option value='eMoney'>e-Money</option>
                    <option value='cashOnDelivery'>Cash on delivery</option>
                  </select>
                </label>
                {paymentType === 'eMoney' && (
                  <>
                    <label>
                      e-Money Number
                      <input
                        type='text'
                        placeholder='238521993'
                        id='eMoneyNum'
                        value={buyer.eMoneyNum}
                        onChange={handleFormChange}
                      />
                    </label>
                    <label>
                      e-Money PIN
                      <input
                        type='text'
                        placeholder='6891'
                        id='eMoneyPin'
                        value={buyer.eMoneyPin}
                        onChange={handleFormChange}
                      />
                    </label>
                  </>
                )}
                {paymentType === 'cashOnDelivery' && (
                  <div className='checkout-cashOnDelivery'>
                    <img src={cashDeliveryIcon} alt='delivery-icon' />
                    <p>
                      The ‘Cash on Delivery’ option enables you to pay in cash when our delivery
                      courier arrives at your residence. Just make sure your address is correct so
                      that your order will not be cancelled.
                    </p>
                  </div>
                )}
              </div>
            </form>
          </div>
          <CheckoutSummary />
        </div>
      </div>
      <div className='checkout-footer'>
        <Footer />
      </div>
    </>
  );
};

export default Checkout;
