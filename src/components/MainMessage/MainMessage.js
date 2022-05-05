import React, { useState } from 'react';
import './MainMessage.css';
import MainButton from '../MainButton/MainButton';
import Advantage from '../Advantage/Advantage';
import bottleImg from '../../images/main-message-page__bottle.png';
import advantages from '../../utils/texts/advantages';
import classNames from 'classnames'

function MainMessage() {
  const [isPopupOpened, setIsPopupOpened] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const popupSelector = classNames('main-message-page__popup', {
    'main-message-page__popup_opened': isPopupOpened
  })

  const currentPositionSelector = classNames('main-message-page__control-position', {
    'main-message-page__control-position_active': currentPage === 2
  })

  function goNextPage() {
    setCurrentPage(2);
  }

  function goPrevPage() {
    setCurrentPage(1);
  }

  function handleMoreBtn() {
    setIsPopupOpened(true);
  }

  function handleCloseBtn() {
    setIsPopupOpened(false);
  }
  return (
    <div className="main-message-page">
      <img className="main-message-page__bottle" src={bottleImg} alt="бутылка с пузырьками"/>
      <div className={popupSelector}>
        <article className="main-message-page__article">
          <button type="button" className="main-message-page__close-btn" onClick={handleCloseBtn}/>
          <p className="main-message-page__subtitle">ПРЕИМУЩЕСТВА</p>
          <h3 className="main-message-page__title">BREND<span className="main-message-page__accent">XY</span></h3>
          <div className="main-message-page__advantages">
            {advantages.slice((currentPage - 1) * 3, currentPage * 3).map((advantage, index) => (
              <Advantage text={advantage} count={index + 1}  key={index}/>
            ))}
          </div>
          <div className="main-message-page__controls">
            <button className="main-message-page__control-btn main-message-page__control-btn_type_prev" type="button" onClick={goPrevPage}/>
            <div className="main-message-page__control-position main-message-page__control-position_active"/>
            <div className={currentPositionSelector}/>
            <button className="main-message-page__control-btn main-message-page__control-btn_type_next" type="button" onClick={goNextPage}/>
          </div>
        </article>
      </div>
      <div className="main-message-page__container">
        <p className="main-message-page__subtitle">КЛЮЧЕВОЕ СООБЩЕНИЕ</p>
        <h3 className="main-message-page__title">BREND<span className="main-message-page__accent">XY</span></h3>
        <div className="main-message-page__info">
          <div className="main-message-page__item main-message-page__item_type_food">
            <p className="main-message-page__text">
              {`Ehicula ipsum a arcu 
              cursus vitae. Eu non 
              diam phasellus 
              vestibulum lorem sed 
              risus ultricies`}
            </p>
          </div>
          <div className="main-message-page__item main-message-page__item_type_calendar">
            <p className="main-message-page__text">
              {`A arcu 
              cursus vitae`}
            </p>
          </div>
          <MainButton handleBtnClick={handleMoreBtn} text={'Подробнее'} place={'main-message-page'}/>
        </div>
      </div>
      
    </div>
  );
}

export default MainMessage;
