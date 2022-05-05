import React from 'react';
import HelloPage from '../HelloPage/HelloPage';
import MainMessage from '../MainMessage/MainMessage';
import TextMessagePage from '../TextMessagePage/TextMessagePage';
import './Slider.css';


function Slider({currSlide, handleTouchDown, handleTouchMove, handleTouchUp, handleBtnClick}) {
  const sliderPosition = {
    transform: `translateX(${getSlidePosition()})`
  };
  function getSlidePosition() {
    if (currSlide === 0) {
      return '0vw'
    } else if (currSlide === 1) {
      return '-100vw'
    } else if (currSlide === 2) {
      return '-200vw'
    }
  }
  return (
    <main className="slider" 
      onTouchStartCapture={handleTouchDown} 
      onTouchMoveCapture={handleTouchMove} 
      onTouchEndCapture={handleTouchUp}
      style={sliderPosition}
    >
      <div className="slider__item">
        <HelloPage handleBtnClick={handleBtnClick}/>
      </div>
      <div className="slider__item">
        <TextMessagePage/>
      </div>
      <div className="slider__item">
        <MainMessage/>
      </div>
  </main>
  );
}

export default Slider;
