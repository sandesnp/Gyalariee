import React, { useState, useEffect } from 'react';
import ThemeToggler from './components/ThemeToggler';
import LandscapeCard from './components/LandscapeCard';
import SearchBar from './components/SearchBar';
import { getRandomArrayObj } from './helpers/getRandomArrayObj';
import useLocalStorage from 'use-local-storage';

const App = () => {
  const [theMetObjects, setTheMetObject] = useState(new Set());
  const themePreference = window.matchMedia(
    '(prefers-color-scheme: dark)'
  ).matches;
  const [isDarkTheme, setIsDarkTheme] = useLocalStorage(
    'isDarkTheme',
    themePreference
  );

  useEffect(() => {
    getRandomArrayObj(2, (response) => {
      setTheMetObject(response);
    });
  }, []);
  return (
    <div id='app' className='app' data-theme={isDarkTheme ? 'dark' : 'light'}>
    <div id="app" className="app" data-theme={isDarkTheme ? "dark" : "light"}>
      <h1>Gyalariee</h1>
      <ThemeToggler setIsDarkTheme={setIsDarkTheme} isDarkTheme={isDarkTheme} />
      <SearchBar setTheMetObject={setTheMetObject} />
      {console.log('theMetObjects:', theMetObjects)}
      {!theMetObjects.size ? (
        <p>Loading...</p>
      ) : (
        [...theMetObjects].map((obj) => (
          <LandscapeCard key={obj.objectID} {...obj} />
        ))
      )}
    </div>
  );
};
export default App;
