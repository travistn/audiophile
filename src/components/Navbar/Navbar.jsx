import { Link } from 'react-router-dom';

import './Navbar.css';
import logo from '../../assets/shared/desktop/logo.svg';
import cartIcon from '../../assets/shared/desktop/icon-cart.svg';

const Navbar = () => {
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
      <img src={cartIcon} alt='cart-icon' className='navbar-cartIcon' />
      <div className='navbar-underline'></div>
    </div>
  );
};

export default Navbar;
