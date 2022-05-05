import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import React, { useState } from 'react';
import Slider from '../Slider/Slider';

function App() {
  const [lastTouchX, setLastTouchX] = useState(0);
  const [startTouchX, setStartTouchX] = useState(0);
  const [startTouchY, setStartTouchY] = useState(0);
  const [lastTouchY, setLastTouchY] = useState(0);
  const [currSlide, setCurrSlide] = useState(0);

  function handleTouchDown(event) {
    setStartTouchX(event.touches[0].clientX);
    setLastTouchX(event.touches[0].clientX);
    setStartTouchY(event.touches[0].clientY);
    setLastTouchY(event.touches[0].clientY);
  }
  function handleTouchUp(event) {
    const diffX = startTouchX - lastTouchX;
    const diffY = startTouchY - lastTouchY;
    if (Math.abs(diffY) - Math.abs(diffX) > 10) {
      return;
    }
    if (diffX >= 15) {
      countCurrSlide(true)
    } else if (diffX <= -15) {
      countCurrSlide(false);
    }
  }
  function handleTouchMove(event) {
    setLastTouchX(event.touches[0].clientX);
    setLastTouchY(event.touches[0].clientY);
  }
  function countCurrSlide(dirForward) {
    if (dirForward && (currSlide < 3)) {
      setCurrSlide(currSlide + 1);
    } else if(!dirForward && (currSlide > 0)) {
      setCurrSlide(currSlide - 1);
    }
  }
  return (
    <div className="App">
      <Header handleLogoClick={setCurrSlide}/>
        <Slider 
          currSlide={currSlide} 
          handleTouchDown={handleTouchDown} 
          handleTouchMove={handleTouchMove} 
          handleTouchUp={handleTouchUp}
          handleBtnClick={setCurrSlide}
        />
      <Footer/>
    </div>
  );
}

export default App;
