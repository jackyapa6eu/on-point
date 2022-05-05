import React, { useRef, useState } from 'react';
import './TextMessagePage.css';
import textMessagePageText from '../../utils/texts/textMessagePage';

function TextMessagePage() {
  const scrollingTextRef = useRef();
  const [scrollPosition, setScrollPosition] = useState(0);
  
  const thumbPosition = {
    top: `calc(${calcThumbPosition()}% - 5%)`
  };

  function calcThumbPosition() {
    if (scrollPosition > 80) {
      return 80
    } else {
      return scrollPosition
    }
  }

  function handleScrollBar(event) {
    setScrollPosition(event.target.value);
    scrollText(event.target.value);
  }

  function scrollText(currentValue) {
    const scrollPosition = (scrollingTextRef.current.scrollHeight - scrollingTextRef.current.clientHeight) / 100 * currentValue;
    scrollingTextRef.current.scrollTop = scrollPosition;
  }

  return (
    <article className="text-message-page">
      <h2 className="text-message-page__header">
        {'ТЕКСТ\nСООБЩЕНИЯ:'}
      </h2>
      <div className="text-message-page__text-container">
        <div className="text-message-page__scrollbar">
        <input type="range" className="text-message-page__input" onChange={handleScrollBar} orient="vertical" min="0" max="100" step="1" value={scrollPosition}/>
          <div className="text-message-page__scrollbar-track"/>
          <div className="text-message-page__scrollbar-thumb" style={thumbPosition}/>
        </div>
          <p className="text-message-page__text" ref={scrollingTextRef}>
            <span className="text-message-page__text_bold">
            Lorem ipsum dolor sit amet, </span>
            {textMessagePageText}
        </p>        
      </div>
    </article>
  );
}

export default TextMessagePage;
