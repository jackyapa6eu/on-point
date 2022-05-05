import React from 'react';
import './Advantage.css';

function Footer({count, text}) {
  return (
    <div className="advantage">
      <h4 className="advantage__title">{`0${count}`}</h4>
      <p className="advantage__text">{text}</p>
    </div>
  );
}

export default Footer;