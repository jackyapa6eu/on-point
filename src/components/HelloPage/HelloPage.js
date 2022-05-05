import React from 'react';
import './HelloPage.css';
import MainButton from '../MainButton/MainButton';


function HelloPage({handleBtnClick}) {
  function handleNextBtnClick() {
    handleBtnClick(1);
  }
  return (
    <div className="hello-page">
      <span className="hello-page__hello-text"> {'ПРИВЕТ, \n'}</span>
      <h1 className="hello-page__header">
        ЭТО
        <span className="hello-page__bold-text"> {'НЕ\n'} </span>
        КОММЕРЧЕСКОЕ
        ЗАДАНИЕ
      </h1>
      <MainButton handleBtnClick={handleNextBtnClick} text={'Что дальше?'} place={'hello-page'}/>
    </div>
  );
}

export default HelloPage;
