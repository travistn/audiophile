import { AiFillFacebook, AiOutlineTwitter, AiOutlineInstagram } from 'react-icons/ai';

import './Footer.css';
import logo from '../../assets/shared/desktop/logo.svg';

const Footer = () => {
  return (
    <div className='footer__container'>
      <div className='footer-line'></div>
      <div className='footer-navBar'>
        <img src={logo} alt='logo' className='footer-navBar-logo' />
        <ul className='footer-navBar-links'>
          <li className='footer-navBar-link'>Home</li>
          <li className='footer-navBar-link'>Headphones</li>
          <li className='footer-navBar-link'>Speakers</li>
          <li className='footer-navBar-link'>Earphones</li>
        </ul>
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
