import React from 'react';
import './Header.css';
import SVG from 'react-inlinesvg';
import headerLogo from '../../images/header__logo.svg';

function Header({handleLogoClick}) {
  function goFirstSlide() {
    handleLogoClick(0);
  }
  return (
    <header className="header" onClick={goFirstSlide}>
      <SVG className="header__logo" src={headerLogo}/>
    </header>
  );
}

export default Header;
