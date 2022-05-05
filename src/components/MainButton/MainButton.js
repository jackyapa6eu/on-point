import React from 'react';
import './MainButton.css';

function MainButton({text, handleBtnClick, place}) {
  return (
    <button type="button" className={`main-button main-button_place_${place}`} onClick={handleBtnClick}>{text}</button>
  );
}

export default MainButton;
