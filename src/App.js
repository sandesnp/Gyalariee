import React, { useState, useEffect } from 'react';
import ThemeToggler from './components/ThemeToggler';
import LandscapeCard from './components/LandscapeCard';
import { apiGetOneRandom } from './API/requests';
import useLocalStorage from "use-local-storage";

const App = () => {
  const themePreference = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDarkTheme, setIsDarkTheme] = useLocalStorage("isDarkTheme",themePreference);
  const [theMetObject, setTheMetObject] = useState({});

  useEffect(() => {
    const fetchTheMetObject = async () => {
      const randomObj = await apiGetOneRandom();
      setTheMetObject(randomObj);
    };
    fetchTheMetObject();
  }, []);

  return (
    <div id='app' className='app' data-theme={isDarkTheme ? 'dark' : 'light'}>
      <ThemeToggler setIsDarkTheme={setIsDarkTheme} isDarkTheme={isDarkTheme} />
      <LandscapeCard {...theMetObject} />
    </div>
  );
};
export default App;
