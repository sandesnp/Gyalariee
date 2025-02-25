import React, { useState, useEffect, useRef } from 'react';
import ThemeToggler from './components/ThemeToggler';
import { getRandomArrayObj } from './helpers/getRandomArrayObj';
import useLocalStorage from 'use-local-storage';
import dummyData from './data/dummy';
import Leftwall from './components/Leftwall';
import Rightwall from './components/Rightwall';
const themePreference = window.matchMedia('(prefers-color-scheme: dark)').matches;

const App = () => {
  // const [museumObjects, setMuseumObjects] = useState(new Set());
  const [museumObjects, setMuseumObjects] = useState(dummyData);
  const [selectedCard, setSelectedCard] = useState(dummyData[1]);
  const [isDarkTheme, setIsDarkTheme] = useLocalStorage('isDarkTheme', themePreference);
  const handleSelect = (ID) => {
    const card = museumObjects.find((card) => card.objectID == ID);
    setSelectedCard(card);
  };

  useEffect(() => {
    getRandomArrayObj(15, (response) => {
      setMuseumObjects([...response]);
    });
  }, [0]);

  return (
    <div id='app' className='app' data-theme={isDarkTheme ? 'dark' : 'light'}>
      <Leftwall
        museumObjects={museumObjects}
        setMuseumObjects={setMuseumObjects}
        handleSelect={handleSelect}
      />
      <Rightwall selectedCard={selectedCard} />
      <ThemeToggler setIsDarkTheme={setIsDarkTheme} isDarkTheme={isDarkTheme} />
    </div>
  );
};

export default App;
