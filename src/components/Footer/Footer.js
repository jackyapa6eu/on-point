import React from 'react';
import './Footer.css';
import SVG from 'react-inlinesvg';
import footerLogo from '../../images/footer__logo.svg';

function Footer() {
  return (
    <footer className="footer">
      <a href='https://onpoint.ru/index.html' target='_blank' rel="noreferrer">
        <SVG className="footer__logo" src={footerLogo}/>
      </a>
    </footer>
  );
}

export default Footer;
