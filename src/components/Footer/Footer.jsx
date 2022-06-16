import { Link } from 'react-router-dom';
import { AiFillFacebook, AiOutlineTwitter, AiOutlineInstagram } from 'react-icons/ai';

import './Footer.css';
import logo from '../../assets/shared/desktop/logo.svg';

const Footer = () => {
  return (
    <div className='footer__container'>
      <div className='footer-line'></div>
      <div className='footer-navBar'>
        <Link to='/'>
          <img src={logo} alt='logo' className='footer-navBar-logo' />
        </Link>
        <div className='footer-navBar-links'>
          <Link to='/' className='footer-navBar-link'>
            Home
          </Link>
          <Link to='/headphones' className='footer-navBar-link'>
            Headphones
          </Link>
          <Link to='/speakers' className='footer-navBar-link'>
            Speakers
          </Link>
          <Link to='/earphones' className='footer-navBar-link'>
            Earphones
          </Link>
        </div>
      </div>
      <p className='footer-about'>
        Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music
        lovers and sound specialists who are devoted to helping you get the most out of personal
        audio. Come and visit our demo facility - we're open 7 days a week.
      </p>
      <p className='footer-copyright'>Copyright 2021. All Rights Reserved</p>
      <div className='footer-socials'>
        <AiFillFacebook className='footer-socials-icon' />
        <AiOutlineTwitter className='footer-socials-icon' />
        <AiOutlineInstagram className='footer-socials-icon' />
      </div>
    </div>
  );
};

export default Footer;
