import './Navbar.css';
import logo from '../../assets/shared/desktop/logo.svg';
import cartIcon from '../../assets/shared/desktop/icon-cart.svg';

const Navbar = () => {
  return (
    <div className='navbar__container'>
      <img src={logo} alt='logo' className='navbar-logo' />
      <ul className='navbar-links'>
        <li className='navbar-link'>HOME</li>
        <li className='navbar-link'>HEADPHONES</li>
        <li className='navbar-link'>SPEAKERS</li>
        <li className='navbar-link'>EARPHONES</li>
      </ul>
      <img src={cartIcon} alt='cart-icon' className='navbar-cartIcon' />
      <div className='navbar-underline'></div>
    </div>
  );
};

export default Navbar;
