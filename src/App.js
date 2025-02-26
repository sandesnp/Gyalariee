import React, { useState, useEffect, useRef } from 'react';
import ThemeToggler from './components/ThemeToggler';
import { getRandomArrayObj } from './helpers/getRandomArrayObj';
import useLocalStorage from 'use-local-storage';
import dummyData from './data/dummy';
import Leftwall from './components/Leftwall';
import Rightwall from './components/Rightwall';
import anime from 'animejs/lib/anime.es.js';
const themePreference = window.matchMedia('(prefers-color-scheme: dark)').matches;

const App = () => {
  // const [museumObjects, setMuseumObjects] = useState(new Set());
  const [museumObjects, setMuseumObjects] = useState(dummyData);
  const [selectedCard, setSelectedCard] = useState(dummyData[1]);
  const [isDarkTheme, setIsDarkTheme] = useLocalStorage('isDarkTheme', themePreference);
  const scrollRef = useRef(null);
  const handleSelect = (ID) => {
    const card = museumObjects.find((card) => card.objectID == ID);
    setSelectedCard(card);
  };

  // useEffect(() => {
  //   getRandomArrayObj(15, (response) => {
  //     setMuseumObjects([...response]);
  //   });
  // }, [0]);

  function onThemeToggle() {
    setIsDarkTheme(!isDarkTheme);
    const originalScrollPos = scrollRef.current.scrollTop;
    const cloneApp = document.getElementById('app').cloneNode(true);
    Object.assign(cloneApp.style, {
      position: 'absolute',
      zIndex: '1000',
      left: 0,
      top: 0,
      width: '100vw',
      dataTheme: 'dark',
      overflow: 'hidden',
    });
    document.body.appendChild(cloneApp);
    cloneApp.querySelector('.search-items').scrollTop = originalScrollPos;
    const appTimeline = anime.timeline({ easing: 'linear' });
    appTimeline.add({
      targets: cloneApp,
      height: 0,
      duration: 1000,
      complete: (_) => {
        document.body.removeChild(cloneApp);
      },
    });
  }

  return (
    <div id='app' className='app' data-theme={isDarkTheme ? 'dark' : 'light'}>
      <Leftwall
        museumObjects={museumObjects}
        setMuseumObjects={setMuseumObjects}
        handleSelect={handleSelect}
        scrollRef={scrollRef}
      />
      <Rightwall selectedCard={selectedCard} />
      <ThemeToggler onThemeToggle={onThemeToggle} isDarkTheme={isDarkTheme} />
    </div>
  );
};

export default App;
