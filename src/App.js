import React, { useState, useEffect, useRef } from 'react';
import ThemeToggler from './components/ThemeToggler';
import { getRandomArrayObj } from './helpers/getRandomArrayObj';
import useLocalStorage from 'use-local-storage';
import Leftwall from './components/Leftwall';
import Rightwall from './components/Rightwall';
import anime from 'animejs/lib/anime.es.js';
const themePreference = window.matchMedia('(prefers-color-scheme: dark)').matches;

const App = () => {
  const [museumObjects, setMuseumObjects] = useState([]);
  const [selectedCard, setSelectedCard] = useState({});
  const [isDarkTheme, setIsDarkTheme] = useLocalStorage('isDarkTheme', themePreference);
  const [wallToggle, setWallToggle] = useState(false);
  const scrollRef = useRef(null);
  const wallToggleRef = useRef(null);
  const handleSelect = (ID) => {
    const card = museumObjects.find((card) => card.objectID == ID);
    setSelectedCard(card);
  };

  useEffect(() => {
    const handleCssRemoval = function (_) {
      if (window.innerWidth > 900) {
        wallToggleRef.current.style = '';
      }
    };
    window.addEventListener('resize', handleCssRemoval);
    return () => window.removeEventListener('resize', handleCssRemoval);
  }, []);

  useEffect(() => {
    getRandomArrayObj(10, (response) => {
      const convertedArray = [...response];
      setMuseumObjects(convertedArray);
      setSelectedCard(convertedArray[0]);
    });
  }, []);

  function onThemeToggle() {
    setIsDarkTheme(!isDarkTheme);
    const originalScrollPos = scrollRef.current.querySelector('.search-items').scrollTop;
    const cloneApp = document.getElementById('app').cloneNode(true);
    Object.assign(cloneApp.style, {
      position: 'absolute',
      zIndex: '1000',
      left: 0,
      top: 0,
      width: `${scrollRef.current.offsetWidth}px`,
      overflow: 'hidden',
    });
    document.body.appendChild(cloneApp);
    cloneApp.querySelector('.search-items').scrollTop = originalScrollPos;
    anime({
      targets: cloneApp,
      height: 0,
      duration: 1500,
      easing: 'linear',
      complete: (_) => {
        document.body.removeChild(cloneApp);
      },
    });
  }

  function onWallToggle() {
    anime({
      targets: wallToggleRef.current,
      flexBasis: !wallToggle ? 0 : 100,
      duration: 1000,
      easing: 'linear',
    });
    setWallToggle(!wallToggle);
  }

  return (
    <div id='app' className='app' data-theme={isDarkTheme ? 'dark' : 'light'} ref={scrollRef}>
      <Leftwall
        museumObjects={museumObjects}
        setMuseumObjects={setMuseumObjects}
        handleSelect={handleSelect}
        wallToggleRef={wallToggleRef}
      />
      <Rightwall selectedCard={selectedCard} />
      <div className='wall-toggle' onClick={onWallToggle}>
        <i className='fa-solid fa-bars'></i>
      </div>
      <ThemeToggler onThemeToggle={onThemeToggle} isDarkTheme={isDarkTheme} />
    </div>
  );
};

export default App;
