import { useState } from 'react';
import { Link } from 'react-router-dom';

import Cart from '../../containers/Cart/Cart';
import './Navbar.css';
import logo from '../../assets/shared/desktop/logo.svg';
import cartIcon from '../../assets/shared/desktop/icon-cart.svg';

const Navbar = () => {
  const [cartIsOpen, setCartIsOpen] = useState(false);

  return (
    <div className='navbar__container'>
      <Link to='/'>
        <img src={logo} alt='logo' className='navbar-logo' />
      </Link>
      <div className='navbar-links'>
        <Link to='/' className='navbar-link'>
          Home
        </Link>
        <Link to='/headphones' className='navbar-link'>
          Headphones
        </Link>
        <Link to='/speakers' className='navbar-link'>
          Speakers
        </Link>
        <Link to='/earphones' className='navbar-link'>
          Earphones
        </Link>
      </div>
      <img
        src={cartIcon}
        alt='cart-icon'
        className='navbar-cartIcon'
        onClick={() => setCartIsOpen(!cartIsOpen)}
      />
      {cartIsOpen && <Cart cartIsOpen={cartIsOpen} setCartIsOpen={setCartIsOpen} />}
      <div className='navbar-underline'></div>
    </div>
  );
};

export default Navbar;
